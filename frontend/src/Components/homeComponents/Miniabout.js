import React from "react";
import im1 from '../homeComponents/necklaceg.jpg';
import { Link } from "react-router-dom";




const Miniabout = () => {
    return (
        <div className="Miniabout" >
            <div className="column">
                 <h1 className="handcrafted">Handcrafted </h1>
                 <h1>& Ethically Sourced</h1>
                 <p className="it">It implies a sense of crafted elegance and unique pieces.</p>
                 <button className="explore" ><Link to="/About" className="explore" >Explore</Link></button>
             </div>
        
         <img src={im1} className="im1"/>
        </div>
    );
};

export default Miniabout;