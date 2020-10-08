import React from 'react';
import '../css/Product.css';
import StarIcon from '@material-ui/icons/Star';
// import { useStateValue } from '../context/StateProvider';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART, selectCart } from '../state/slices/cartSlice';
// end-redux

const Product = ({ id, title, image, price, rating }) => {
  const dispatchRedux = useDispatch();
  // const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    // dispatch({
    //   type: 'ADD_TO_CART',
    //   item: {
    //     id,
    //     title,
    //     image,
    //     price,
    //     rating,
    //   },
    // });
    dispatchRedux(ADD_TO_CART({ id, title, image, price, rating }));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon className="product__ratingStar" />
            ))}
        </div>
      </div>
      <img src={image} alt={image} />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
