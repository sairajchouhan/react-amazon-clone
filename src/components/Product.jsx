import React from 'react';
import '../css/Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../context/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();
  console.log('this is the cart', cart);
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
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
            .map((_, i) => (
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
