import React, { useEffect, useState } from 'react';
import "../MeeshoCompo/Allproducts.css"
import { useNavigate } from 'react-router-dom';

const Allproducts = () => {
  const [isProductsExist, setIsProductsExist] = useState(false);
  const [products, setProducts] = useState([]);
  const router = useNavigate();

  // console.log(products, " - products")

  useEffect(() => {
      const productsFromDb = JSON.parse(localStorage.getItem("Products"))
      if (productsFromDb?.length) {
          setIsProductsExist(true);
          setProducts(productsFromDb)
      } else {
          setIsProductsExist(false)
          setProducts([])
      }
  }, [])

  const tosingleproduct = (id) =>{
      console.log(id,"id")
        router(`/Singleproduct/${id}`)
  }
  return (
    <div>
      <div id="container">
        <h2>Men Top Wear </h2>
        <p>Showing 41-60 out of 10000 products</p>
        <div id="allproducts">
          <div id="productfilterby">
            <div> Sort by : <b>Relevance</b></div>
            <div>
              <p><b>FILTERS</b></p>
              <p>1000+ Products</p>
              <p>Category</p>
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="search" />
              </div>
              <div>
                <input type="checkbox" /> <label htmlFor="">Shirt</label><br />
                <input type="checkbox" /> <label htmlFor="">T-shirts</label><br />
                <input type="checkbox" /> <label htmlFor="">Pants</label><br />
                <input type="checkbox" /> <label htmlFor="">Sports</label><br />
                <input type="checkbox" /> <label htmlFor="">Watches</label><br />
                <input type="checkbox" /> <label htmlFor="">Car Covers</label><br />
                <input type="checkbox" /> <label htmlFor="">Shirt</label><br />
                <input type="checkbox" /> <label htmlFor="">Watches</label><br />
                <input type="checkbox" /> <label htmlFor="">Gown</label><br />
                <input type="checkbox" /> <label htmlFor="">Analog Watches</label><br />
                <input type="checkbox" /> <label htmlFor="">Dresses</label><br />
                <input type="checkbox" /> <label htmlFor="">Analog Watches</label><br />
                <input type="checkbox" /> <label htmlFor="">Bangles & Bracelets</label><br />
                <input type="checkbox" /> <label htmlFor="">Blouses</label><br />
              </div>
              <div>
                <p>Gender</p>
                <span>Boy</span>
                <span>Girl</span>
                <span>Men</span>
                <span>Women</span>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">Fabric</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">Color</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">Price</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">Meesho Mall</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <h2>WOMENS Dresses</h2>
                  <option value="">Occasion</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">combo of</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">Discount</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">Rating</option>
                </select>
              </div>
              <div>
                <select name="" className="SELECTION">
                  <option value="">Print Or Pattern Type</option>
                </select>
              </div>
            </div>
          </div>
          {!isProductsExist ? <div>No products</div> :
          <div id="product">
            {products && products.map((pro) => (
            <div onClick={() => tosingleproduct(pro.id)}  key={pro.name}>
              <div> <img src={pro.image} /></div>
              <p>{pro.name}</p>
              <h5>₹{pro.price} <span>onwards</span></h5>
              <div><span>{pro.category}</span></div>
              <span>3.3 &#9733;</span><span>961 review</span>
            </div>
             ))}
            {/* Add other product elements here */}
          </div>

  }

        </div>
      </div>
    </div>
  );
};

export default Allproducts;
