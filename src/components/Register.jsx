import React, { useState } from 'react';
import '../css/Register.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      <div className="register__container">
        <h1>Create Account</h1>
        <form>
          <h5>Your name (optional)</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            required
          />
          <button
            onClick={register}
            type="submit"
            className="register__signInButton"
          >
            Continue
          </button>
        </form>
        <div className="register__footer">
          Already have an account?{' '}
          <Link className="register__footerLink" to="/login">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
