import React from 'react';
import './App.css';
import "./responsive.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import Singleproduct from "./screens/Singleproduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import Shipping from "./screens/Shipping";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import Notfound from "./screens/Notfound";
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ShopScreen from './screens/ShopScreen';
import Wishlist from './screens/Wishlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Products/:id" element={<Singleproduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<CartScreen />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/Payment" element={<PaymentScreen />} />
        <Route path="/PlaceOrder" element={<PlaceOrderScreen />} />
        <Route path="/Order" element={<OrderScreen />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/About" element={<AboutScreen />} />
        <Route path="/Contact" element={<ContactScreen />} />
        <Route path='/Shop' element={<ShopScreen/>} />
        <Route path="/Wishlist" element={<Wishlist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
