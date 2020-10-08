import React from 'react';
import '../css/Subtotal.css';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from '../context/StateProvider';
import { useSelector } from 'react-redux';
import { selectCart } from '../state/slices/cartSlice';

const Subtotal = () => {
  const history = useHistory();
  const cart = useSelector(selectCart);
  let subtotal = cart
    ?.map(({ price }) => price)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
      />
      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
