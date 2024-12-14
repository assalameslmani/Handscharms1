import React from "react";
import img1 from '../homeComponents/ringg.jpg';
import img2 from '../homeComponents/necklaceb.jpg';
import img3 from '../homeComponents/braceletp.jpg';
import img4 from '../homeComponents/keyring.jpg';
import img5 from '../homeComponents/setphone.jpg';


const Collection = () => {
    return (
        <div className="collection">
            <h1 className="c1">SHOP OUR COLLECTION</h1>
            <div className="container-collection">
                <div className="columnc1">
                    <img src={img1} className="img1"/>
                    <h3 className="titlec">Rings</h3>
                    <button className="price-btn">45$</button>
                </div>
                <div className="columnc2">
                    <img src={img2} className="img2"/>
                    <h3 className="titlec">Necklace</h3>
                    <button className="price-btn">45$</button>
                </div>
                <div className="columnc3">
                    <img src={img3} className="img3"/>
                    <h3 className="titlec">Bracelet</h3>
                    <button className="price-btn">45$</button>
                </div>
                <div className="columnc4">
                    <img src={img4} className="img4"/>
                    <h3 className="titlec">Key-ring</h3>
                    <button className="price-btn">45$</button>
                </div>
                <div className="columnc5">
                    <img src={img5} className="img5"/>
                    <h3 className="titlec">Phone Hanger</h3>
                    <button className="price-btn">45$</button>
                </div>
            </div>
        </div>
    );
};

export default Collection;