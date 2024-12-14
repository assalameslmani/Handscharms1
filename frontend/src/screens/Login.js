import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        setLoggedIn(true);
      };
    return (
        <div>
            <Header/>
            <div className='login-form'>
             {loggedIn ? (
               <div>
                 <p className='welcome-back'>Welcome Back, {email}!</p>
                </div>
                ) : (
                <div className='form-login'>
                   <h2 className='wec-bac'>WELCOME BACK!</h2>
                    <form onSubmit={handleLogin}>
                      <label >
                        <input className='inputs'
                         placeholder='Email...'
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                      <br />
                      <label >
                        <input
                          className='inputs'
                          placeholder='Password...'
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
                      <br />
                      <button type="submit" className='loginn-btn'>Login</button>
                    </form>
                 
                
                 <p >
                    <br/>
                    <Link to={"/register"}  className='link-reg'>
                    <br/>create an account to get unlimited access to our products<br/> and catalogs. <br/> <strong className='regi'>Register</strong>
                    </Link>
                 </p>
                </div>
            )} </div>
        </div>
    );
};

export default Login;