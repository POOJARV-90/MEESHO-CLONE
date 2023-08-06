import React, { useContext, useEffect, useState } from 'react';
import "../MeeshoCompo/Navbar.css"
import { useNavigate } from "react-router-dom";
import {Authcontext} from "./Context/Authcontext"

const Navbar = () => {
  const [userdata, setUserdata] = useState();
  const [display, setDisplay] = useState(false);
  const { state, logout } = useContext(Authcontext);
  const router = useNavigate();
  useEffect(() => {
    if (state?.user) {
      setUserdata(state?.user);
    } else {
      setUserdata({});
    }
  }, [state]);
  const handleMouseEnter = () => {
    setDisplay(true);
  };

  const handleMouseLeave = () => {
    setDisplay(false);
  };

  return (
    <div>
      <div id="navbar">
        <div>
          <div id="logo" onClick={() => router("/")}>
            
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
            <div onMouseEnter={handleMouseEnter} >
              <i className="fa-regular fa-user"></i>
              <p>Profile</p>
            </div>
            <div onClick={() => router("/Cart")} >
              
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
              
            </div>

            {userdata?.role == "Seller" && (
          <div onClick={() => router("/AddProduct")}>
          <i className="fa-solid fa-plus"></i>
          <p> <small> <small> Addproduct</small></small> </p>
          </div>
           )}
          </div>
        </div>
         {display &&
        //  
        (<div  id="menudown" onMouseLeave={handleMouseLeave} >

          <div>
          {userdata?.email ? <h3> <i class="fa-regular fa-user"></i> Hello User <br /> <small>{userdata.name}</small>  </h3> : 
          
           <>
           <h3>  Hello User </h3>
            <p> <small> <small>To access your Meesho account</small></small></p> 
           </>  }
           {!userdata?.email ? (<button id='menudown-button'  onClick={() => router("/Login")}>SignUp</button>): null}
          </div>

          <div>
          <i class="fa-solid fa-bag-shopping"></i> My Orders
          </div>

          {userdata?.email ?  <div onClick={logout}> 
            <i class="fa-solid fa-right-from-bracket"></i> logout
          </div> : null }



        </div>) }
      </div>
      <div id="categories">
       
          <span onClick={() => router("/Allproducts")} >Women Ethnic</span>
        
       
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
