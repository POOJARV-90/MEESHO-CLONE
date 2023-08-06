import React, { useEffect, useState } from 'react';
import "../MeeshoCompo/Cart.css"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();

  // console.log(userCart, "- userCart");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          setUserCart(allUsers[i].cart);
          break;
        }
      }
    } else {
     alert("Please login to watch all cart products.");
      router("/login");
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
        var totalprice = 0;
        for (var i = 0; i < userCart.length; i++) {
            totalprice += parseInt( userCart[i].price) 
        }
        setFinalPrice(totalprice)
    }
}, [userCart])


useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"))
    if (user) {
        if (user?.role == "Seller") {
            alert("Access granted only to Buyer.")
            router('/')
        }
    } else {
        alert("You are not a Logged in user.")
        router('/Login')
    }
}, [])


  function checkout(){
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          allUsers[i].cart=[];
          break;
        }
      }
      localStorage.setItem("Users",JSON.stringify(allUsers))
    }
    setFinalPrice([]);  
    setUserCart([]);
   alert("Your products will be delivered soon. Thankyou for shopping!")
  }

  return (
    <div>
      <div id="cart">
      {userCart.length > 0 ? (
        <>
          {userCart.map((pro) => (
        <div>
          <span style={{ borderRight: '1px solid grey' }}> <strong>Cart</strong></span>
          <span style={{ color: '#7f7f88' }}>1 Item</span>

          <div>
          <img src={pro.image} alt="" />
            <div>
              <p>{pro.name}</p>
              <span>Size: S  Qty: 1</span>
              <p>₹{pro.price}</p>
              <button><i className="fa-solid fa-xmark"></i> REMOVE</button>
            </div>
          </div>

          <div>
            <div>Sold By: AJAY CRE#</div>
            <div>Free Delivery</div>
          </div>
        </div> 
          ))}
        </>
        
        ) : (
              <div >
                <h3 style={{color:"#f73c4f" , textAlign:"center"}}> <br />   No products in the cart</h3>
                <img src="https://cdn.dribbble.com/users/324185/screenshots/15805709/after-login-no-product-on-cart-2_10.14.19_pm_1x.jpg" alt="" />
              </div>
            )}

        <div>
          <h5>Price Details</h5>

          <div style={{ borderBottom: '1px solid #c8c8ec' }}>
            <div>Total Product Price</div>
            <div>₹261</div>
          </div>

          <div>
            <div>Order Total</div>
            <div>₹261</div>
          </div>

          <p>Clicking on ‘Continue’ will not deduct any money</p>

          <button>Continue</button>

          <img src="https://images.meesho.com/images/marketing/1588578650850.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
