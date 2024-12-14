import React from "react";
import LogoF from "../images/Logo.png";
import fb from "../images/facebook (1).svg";
import insta from "../images/instagram-with-circle.svg";
import tik from "../images/tiktok.svg";
import phone from "../images/phone.svg";
import email from "../images/stacked-email-sharp.svg";
import loc from "../images/map-location.svg";


const Footer = () => {
    const  phoneNumber = '0096181687902';
    const emaill = 'handscharms@gmail.com';
    const loca = 'fakiha';
    const fbc = 'www.fb.com';
    return (
        <div className="footer">
            <div className="container-f">
                <div className="columnf1">
                 <a href={`fb:${fbc}`}>
                  <img src={fb} alt="fb" className="sm" /></a>
                    <br/>
                    <a href={`fb:${fbc}`}> 
                    <img src={insta} alt="insta" className="sm" /></a>
                    <br/>
                    <a href={`fb:${fbc}`}>
                    <img src={tik} alt="tik" className="sm" /></a>
                </div>
                <div className="columnf2">
                     <img src={LogoF} alt="Logo" className="logof" />
                </div>
                <div className="columnf3">
                    <a href={`tel:${phoneNumber}`}><img src={phone} alt="Phone" className="sm"  /></a>
                     
                    <br/>
                    <a href={`email:${emaill}`}><img src={email} alt="Email" className="sm" /> </a>
                    <br/>
                    <a href={`loc:${loca}`}><img src={loc} alt="Location" className="sm" /> </a>
                </div>
            </div>
            <h5 className="copy">© 2024 HANDS CHARMS. All rights reserved.</h5>
        </div>
    );
};

export default Footer;