import React, { useState, useEffect } from 'react';
import '../css/Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../context/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../axios';
import { db } from '../firebase';

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();
  let subtotal = cart
    ?.map(({ price }) => price)
    .reduce((acc, curr) => acc + curr, 0);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // gennerate the special stripe secret which alowsus to charge a customer
    const getClinetSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${subtotal * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClinetSecret();
  }, [cart]);

  console.log('THE CLIENT SECRET IS >>>', clientSecret);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff.....
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent is paymentConfirmation
        console.log(paymentIntent);
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: 'EMPTY_CART' });
        history.replace('/orders');
      });
  };

  const handleChange = (e) => {
    // Listen for changes in the CardElevent
    // and display any errors as the customer types their card and
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          {/* delevery adresses */}
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>Shanthi nager, Sangareddy</p>
            <p>Telangana, India</p>
          </div>
        </div>
        <div className="payment__section">
          {/* review items*/}
          <div className="paymnet__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          {/* checkout */}
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe magic here */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={subtotal}
                  displayType={'text'}
                  thousandSeperator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
