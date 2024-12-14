import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Notfound = () => {
    return (
        <div>
            <Header/>
            <div className="notfound"> 
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <button className="login-btn">
                <Link to="/" className="login-btn">
                    Home Page
                </Link>
            </button>
            </div>
        </div>
    );
};

export default Notfound;