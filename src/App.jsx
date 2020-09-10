import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import Register from './components/Register';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
