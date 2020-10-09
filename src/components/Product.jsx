import React, { useEffect } from 'react';
import '../css/Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, selectCart } from '../state/slices/cartSlice';
import { selectUser } from '../state/slices/userSlice';
import firebase from 'firebase';

import { db } from '../firebase';

const Product = ({ id, title, image, price, rating }) => {
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const dispatchRedux = useDispatch();

  const addToFirestore = (cart) => {
    return new Promise((resolve, reject) => {
      dispatchRedux(ADD_TO_CART(cart));
      resolve(cart);
    });
  };

  const addToCart = () => {
    addToFirestore({ id, title, image, price, rating }).then((res) =>
      db
        .collection('users')
        .doc(user?.uid)
        .collection('cartItems')
        .doc(user?.uid)
        .set(
          {
            cart: [...cart, res],
          },
          { merge: true }
        )
    );
  };

  // const addToCart = () => {
  //   if (user) {
  //     dispatchRedux(ADD_TO_CART({ id, title, image, price, rating }));
  //     db.collection('users')
  //       .doc(user?.uid)
  //       .collection('cartItems')
  //       .doc(user?.uid)
  //       .set(
  //         {
  //           cart: cart,
  //         },
  //         { merge: true }
  //       );
  //   }
  // };
  // console.log(cart, 'I am ot');
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
