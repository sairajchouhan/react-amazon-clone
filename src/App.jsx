import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Orders from './components/Orders';
import Register from './components/Register';
import Payment from './components/Payment';
import Checkout from './components/Checkout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HEXXnF4ldA99MqqkdjXnGrvV0K7V0X5J2Y4RGCRbNAiVHMwgmIJun6iKMJ4rPFlq79V4vr7dhjdVAAzYHYucniG006Vt8kT1R'
);

function App() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is ' + authUser);
      if (authUser) {
        dispatch({ type: 'SET_USER', user: authUser });
      } else {
        dispatch({ type: 'SET_USER', user: null });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
