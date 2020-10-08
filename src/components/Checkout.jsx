import React from 'react';
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
// import { useStateValue } from '../context/StateProvider';

import { useSelector } from 'react-redux';
import { selectCart } from '../state/slices/cartSlice';

const Checkout = () => {
  // const [{ cart }] = useStateValue();
  const cart = useSelector(selectCart);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProduct
              image={item.image}
              id={item.id}
              rating={item.rating}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt="100% purchase protection"
          style={{ marginBottom: '20px' }}
        />
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
