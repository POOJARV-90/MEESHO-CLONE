import React from 'react';
import "../MeeshoCompo/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div id="navbar">
        <div>
          <div id="logo">
            
              <img
                src="https://uploads-ssl.webflow.com/62bc395da3c33ed00dcc1317/634bd1950007a1468123fe05_logo%20meesho%20-p-500.png"
                alt="Meesho Logo"
              />
            
          </div>
          <div id="search">
            <div>
              <i className="fa-solid fa-magnifying-glass fa-xl"></i>
              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span>Download App</span>
          </div>
          <div>
            <span>Become a Supplier</span>
          </div>
          <div>
            <div>
              <i className="fa-regular fa-user"></i>
              <p>Profile</p>
            </div>
            <div>
              
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
              
            </div>
          </div>
        </div>
      </div>
      <div id="categories">
       
          <span>Women Ethnic</span>
        
       
          <span>Women Western</span>
        
       
          <span>Men</span>
        
       
          <span>Kids</span>
        
        
          <span>Home & Kitchen</span>
        
       
          <span>Beauty & Health</span>
        
       
          <span>Jewellery & Accessories</span>
        
       
          <span>Bags & Footwear</span>
        
          <span>Electronics</span>
       
      </div>
    </div>
  );
};

export default Navbar;
