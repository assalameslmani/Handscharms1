import React from 'react';
import { Link } from 'react-router-dom';
import wishlist from "../images/heart.svg";

const Product = ({ id, name, description, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className='image-shop' />
      <div className='like'>
        <h3 className='name-shop'>{name}</h3>
        <Link to="/wishlist"><img src={wishlist} className='like-img' /></Link> 
      </div>
      <p className='price-shop'>${price.toFixed(2)}</p>
      <Link to="/cart" className='shop-btn'>Add to Cart</Link>
    </div>
  );
};

export default Product;
