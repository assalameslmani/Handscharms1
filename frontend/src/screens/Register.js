import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Register = () => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', { email, password, confirmPassword });
  };

  return (
    <div>
      <Header />
      <div className='register-form'>
        <div className='form-register'>
          <h2 className='wecc'>WELCOME ! </h2>
          <form onSubmit={handleRegister}>
            <label>
              <input
                className='inputs-reg'
                placeholder='Email...'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                className='inputs-reg'
                placeholder='Password...'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                className='inputs-reg'
                placeholder="Confirm Password ..."
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit" className='register-btn'>SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;