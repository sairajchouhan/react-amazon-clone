import React, { useState, useEffect } from 'react';
import '../css/Orders.css';
import { db } from '../firebase';
import Order from './Order';
import { useSelector } from 'react-redux';
import { selectUser } from '../state/slices/userSlice';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
