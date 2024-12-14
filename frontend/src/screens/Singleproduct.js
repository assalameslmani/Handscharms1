import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import Header from "../Components/Header";
import Message from "./../Components/LoadingError/Error";
import axios from "axios";


const Singleproduct = ({match}) => {
    const [product,setProduct] = useState({})

    useEffect(()=>{
const fetchproduct = async() =>{
  const {data} = await axios.get`/api/products/${match.params.id}`
  setProduct(data)
};
fetchproduct();
    },[]);
    return(
        <div>
            <Header/>
            <div>
                <Message variant={"alert-warning"}>
                    Please{""}
                    <Link to={"/login"}>
                        "<strong>Login</strong>"
                    </Link>{""}
                </Message>
            </div>
        </div>
    );
};
export default Singleproduct;