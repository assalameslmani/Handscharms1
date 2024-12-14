import React from "react";

const Contact = () => {

    return(
        <div className="Contact">
            <h4 className="welcomeab" >Fill out the form below to send us a message. We'll get back to you as soon as possible.</h4>
            <div className="box-contact">  
                <form  className="contactform" >
                  <input id="message" name="message" rows="5" defaultValue="Message..." required className="textarea" />
                  <br/> 
                  <button className="submit-btn">SUBMIT</button>   
                </form>
            </div>
            <br/>
        </div>

    );
};

export default Contact;