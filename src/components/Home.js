import React from 'react';
import { Link } from 'react-router-dom';
import reactimage from "../6505894.jpg"
import shop from "./shop";
const HomePage = () => {

  
  
  return (
    
   
    <div className="container-fluid"   >
      <div className="row">
        <div className="col-12 col-lg-6">
          <h1 className="text-primary">Welcome to our eCommerce store!</h1>
          <p className="lead">We have a wide selection of products at great prices. Browse our collections or use our search bar to find what you're looking for.</p>
          <p className='lead'>Here you will be able to find all sorts of second hand goods in an affordable price </p>
          <p className='lead'>our customer service team is always available to answer any questions or concerns you may have. So why wait? Start exploring our flea market webpage and discover the unique and exciting treasures waiting to be discovered!</p>
          <a href="/Login">
            <button type="button" className="btn btn-lg btn-primary mt-3">Shop Now</button>
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <img src={reactimage} className="img-fluid" alt="Welcome to our eCommerce store!" style={{marginTop: '2cm'}}/>
        </div>
      </div>
    </div>
  );
}; 

export default HomePage;
