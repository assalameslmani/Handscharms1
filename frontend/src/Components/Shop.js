import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';
import searchbtn from "../images/search-locate.svg";

const Shop = () => {
    const [products,setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [searchTerm, setSearchTerm] = useState('');
  
    //const uniqueCategories = [...new Set(products.map((product) => product.category))];
    const categoryOptions = ['All Categories', 'Ring', 'Necklace', 'Earrings', 'Bracelet', 'KeyRing', 'Phone Hanger'];
  
    const filteredProducts = products.filter((product) => {
      const isCategoryMatch =
        selectedCategory === 'All Categories' || product.category === selectedCategory.toLowerCase();
  
      const isSearchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
  
      return isCategoryMatch && isSearchMatch;
    });
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div className='shop-shop'>
       
  
        <div className='search-category'>
          <select onChange={(e) => handleCategoryChange(e.target.value)} className='cat-shop'>
            {categoryOptions.map((category) => (
              <option key={category} value={category} className='op-cat'>
                {category}
              </option>
            ))}
          </select>
          <input
            className='search'
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
         <div><img src={searchbtn} className='img-search' /></div>
        </div>
  
        <div className="products-list">
          {filteredProducts.map((product) => (
            <Product
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Shop;