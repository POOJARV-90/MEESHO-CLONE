import React from 'react';
import "../MeeshoCompo/Cart.css"

const Cart = () => {
  return (
    <div>
      <div id="cart">
        <div>
          <span style={{ borderRight: '1px solid grey' }}> <strong>Cart</strong></span>
          <span style={{ color: '#7f7f88' }}>1 Item</span>

          <div>
            <img src="https://images.meesho.com/images/products/70393359/7x5uz_512.jpg" alt="" />
            <div>
              <p>AJ19ES49A</p>
              <span>Size: S  Qty: 1</span>
              <p>₹261</p>
              <button><i className="fa-solid fa-xmark"></i> REMOVE</button>
            </div>
          </div>

          <div>
            <div>Sold By: AJAY CRE#</div>
            <div>Free Delivery</div>
          </div>
        </div>

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
