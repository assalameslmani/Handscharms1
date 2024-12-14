import React from "react";
import icon1 from '../homeComponents/primitive-necklace.svg';
import icon2 from '../homeComponents/necklace.svg';
import icon3 from '../homeComponents/drop-earrings.svg';
import icon4 from '../homeComponents/ring.svg';
import icon5 from '../homeComponents/keyring.svg';

const Section2 = () => {
    return (
        <div className="section2">
            <img src={icon1} className="icon1"/>
            <img src={icon2} className="icon2"/>
            <img src={icon3} className="icon3"/>
            <img src={icon4} className="icon4"/>
            <img src={icon5} className="icon5"/>
        </div>
    );
};

export default Section2;