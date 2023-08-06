import React, { useContext, useEffect, useState } from 'react';
import "../MeeshoCompo/Singleproduct.css"
import { useNavigate, useParams } from 'react-router-dom';
import { Authcontext } from './Context/Authcontext';

const Singleproduct = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const router = useNavigate();
  const { state } = useContext(Authcontext);
  const [isProductExist, setIsProductExist] = useState(false);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    category: "Other",
  });
  const [allowUpdate, setAllowUpdate] = useState(false);

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

  useEffect(() => {
    const productFromDB = JSON.parse(localStorage.getItem("Products"));
    if (productFromDB) {
      setIsProductExist(true);
      setProducts(productFromDB);
    } else {
      setIsProductExist(false);
    }
  }, []);

  useEffect(() => {
    if (isProductExist) {
      if (id && products.length) {
        const res = products.find((pro) => pro.id == id);
        setSingle(res);
      }
    }
  }, [id, products]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    // console.log(user, "uzer");
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  function addCart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("Users"));
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == currentUserEmail) {
          users[i]?.cart?.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          break;
        }
      }
      alert("Product successfully added to cart!");
      router("/AllProducts");
    } else {
      alert("You can't add a product before logging in!");
    }
  }


  function uptoDate() {
    setAllowUpdate(true);
  }

  function closeUpate() {
    setAllowUpdate(false);
  }

  function handleChange(e) {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }
  function selectRole(e) {
    setProductData({ ...productData, ["category"]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const allProduct = JSON.parse(localStorage.getItem("Products"));
    for (let i = 0; i < allProduct.length; i++) {
      if (allProduct[i].id === id) {
        allProduct[i].image = productData.image;
        allProduct[i].name = productData.name;
        allProduct[i].price = productData.price;
        allProduct[i].category = productData.category;
        single.image = productData.image;
        single.name = productData.name;
        single.price = productData.price;
        single.category = productData.category;

        localStorage.setItem("Products", JSON.stringify(allProduct));
        setProductData({ name: "", price: "", image: "", category: "Other" });
       alert("Product Updated!");
      }
    }
  }
  return (
    <div>
      <div id="Productdis">
        <div>
          <div>
            <div>
              <img  src={single.image} alt="" />
              <img  src={single.image} alt="" />
              <img src={single.image} alt="" />
              <img src={single.image} alt="" />
            </div>
            <div>
              <img src={single.image} alt="" />
            </div>
          </div>

          <div>

          {userData?.role === "Seller" ? (
            <button onClick={uptoDate} > <i class="fa-regular fa-pen-to-square"></i>Edit Product </button>)
            :
            (<button onClick={addCart}  > <i className="fa-solid fa-cart-shopping"></i> Add to Cart </button>) }





            <button> Buy Now <b style={{ fontSize: 'larger' }}>»</b></button>
          </div>

        </div>

        <div>
          <div>
            <p>{single.name} : {single.category}</p>
            <p>₹ {single.price}</p>
            <span>3.3 ★</span>
            <span>41314 Ratings, 7251 Reviews</span>
            <div><span>Free Delivery</span></div>
          </div>

          <div>
            <h3>Select Size</h3>
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XX</span>
          </div>

          <div>
            <h3>Product Details</h3>
            <p>Name: SSC Power Shoulders Top</p>
            <p>Fabric: Polyester</p>
            <p>Sleeve Length: Short Sleeves</p>
            <p>Pattern: Solid</p>
            <p>Net Quantity (N): 1</p>
            <p>Sizes:</p>
            <p>XS, S (Bust Size: 34 in, Length Size: 19 in)</p>
            <p>M (Bust Size: 36 in, Length Size: 19 in)</p>
            <p>L (Bust Size: 38 in, Length Size: 19 in)</p>
            <p>XL (Bust Size: 40 in, Length Size: 19 in)</p>
            <p>XXL (Bust Size: 43 in, Length Size: 19 in)</p>
            <p>Country of Origin: India</p>
            <span>More Information</span>
          </div>

          <div>
            <div>
              <img src="https://images.meesho.com/images/pow/shop_100.webp" alt="" />
              <span>FUTURE COLLECTION</span>
              <button>View Shop</button>
            </div>
            <div>
              <div>
                <span style={{ border: '1px solid #6786c5', borderRadius: '15px', width: '60%', textAlign: 'center', padding: '1%', color: '#6786c5' }}>4.0 ★</span>
                <span>61,089 Ratings</span>
              </div>
              <div>
                <span>2,034</span>
                <span>Followers</span>
              </div>
              <div>
                <span>34</span>
                <span>Products</span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3>Product Ratings & Reviews</h3>
              <div id="ratingbars">
                <div>
                  <span>4.3 ★</span>
                  <p>41314 Ratings,<br />7251 Reviews</p>
                </div>
                <div>
                  <span>Excellent</span><br />
                  <span>Very Good</span><br />
                  <span>Good</span><br />
                  <span>Average</span><br />
                  <span>Poor</span>
                </div>
                <div>
                  <p><progress value="60" max="100" /></p>
                  <p><progress value="50" max="100" /></p>
                  <p><progress value="60" max="100" /></p>
                  <p><progress value="19" max="100" /></p>
                  <p><progress value="15" max="100" /></p>
                </div>
              </div>
             
            </div>
          </div>

          <div id="doptions">
            <div>
              <img src="https://images.meesho.com/images/value_props/lowest_price_pbd.png" alt="" />
              <span>Lowest<br /> Price</span>
            </div>
            <div className="borderleftright" >
              <img src="https://images.meesho.com/images/pow/cod_jamun.svg" alt="" />
              <span>Cash on<br /> Delivery</span>
            </div>
            <div>
              <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" alt="" />
              <span>7-days<br /> Returns</span>
            </div>
          </div>
        </div>
      </div>

      <> {allowUpdate ? (
        <div  className="update-form-container" style={{marginTop:"1px solid grey"}}>
           <p style={{textAlign:"right", color:"white", fontWeight:"700"}} onClick={closeUpate}>X</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
              
                
              
                {/* <legend>Fill your Details</legend> */}
                <label>Product Name:</label>
                <br />
                <input
                  style={{
                    width: "380px",
                    marginTop: "10px",
                    height: "30px",
                    marginBottom: "10px",
                    textAlign: "centre",
                    border: "1px solid grey"
                  }}
                  type="text"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                />
                <br />

                <label>Product Price :</label>
                <br />
                <input
                  style={{
                    width: "380px",
                    marginTop: "10px",
                    height: "30px",
                    marginBottom: "10px",
                    textAlign: "centre",
                    border: "1px solid grey"
                  }}
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                />
                <br />
                <label>Product Category :</label>
                  
                <select
                  id="select"
                  onChange={selectRole}
                >
                  <option value="Other">Other</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                  <option value="Electronics">Electronics</option>
                </select>
                <br />
                <label>Product Image :</label>
                <br />
                <input
                  style={{
                    width: "380px",
                    marginTop: "10px",
                    height: "30px",
                    marginBottom: "10px",
                    textAlign: "centre",
                    border: "1px solid grey"
                  }}
                  type="text"
                  name="image"
                  value={productData.image}
                  onChange={handleChange}
                />
                <br />
                <input
                  style={{border:"none",fontSize:"17px",padding:"2%",borderRadius:"25px" ,}}
                  type="submit"
                  value="Update Product"
                 
                />
               
                  
            </form>
          </div>
        </div>
      ) : null}</>
    </div>
  );
}

export default Singleproduct;
