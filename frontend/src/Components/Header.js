import React from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
                 <img src={Logo} alt="Logo" />
            </div>
          <ul className="headerul">
           <li><Link to="/" >HOME</Link></li>
           <li><Link to="/About" >ABOUT</Link></li>
           <li><Link to="/Shop" >SHOP</Link></li>
           <li><Link to="/Contact" >CONTACT</Link></li>
          </ul>
         <button className="login-btn"> <Link to="/Login" className="login-btn" > LOGIN </Link> </button>
        </div> 
    );
};

export default Header;