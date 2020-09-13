import React from 'react';
import '../css/Header.css';
import { useStateValue } from '../context/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { auth } from '../firebase';

const Header = () => {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push('/');
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} className="header__link">
          <div
            onClick={handleAuthentication}
            className="header__option"
            style={{ textDecoration: 'none' }}
          >
            <span className="header__optionLineOne">
              Hello {user ? user?.email.split('@')[0] : 'guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Logout' : 'SignIn'}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* <ShoppingBasketIcon /> */}
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
