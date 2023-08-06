import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    role: "Buyer",
  });

  const router = useNavigate();

  const handlechange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };
  console.log(userdata);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userdata.name && userdata.email && userdata.password) {
      const array = JSON.parse(localStorage.getItem("Users")) || [];

      const userobject = {
        name: userdata.name,
        email: userdata.email,
        password: userdata.password,
        role: userdata.role,
        cart: [],
      };
      array.push(userobject);
      localStorage.setItem("Users", JSON.stringify(array));

      setUserdata({ name: "", email: "", password: "", role: "Buyer" });
      router("/Login");
      alert("Registerd succesfully");
    } else {
      alert("please submit the require details");
    }
  };

  function selectrole(event) {
    // console.log(event.target.value ,"role")
    setUserdata({ ...userdata, ["role"]: event.target.value });
  }
  return (
    <div> 
        <div id="reg-pg">
    <div>
      <div>
        <img
          src="https://entrackr.com/storage/2020/03/Meesho-grocery.jpg"
          alt=""
        />
      </div>

      <form  onSubmit={handleSubmit}>
        <h2>wellcome to meesho</h2>

        <label >Name</label> <br />
        <input  placeholder="Enter Your Name" 

value={userdata.name}
type="text"
onChange={handlechange}
name="name"
        /><br />

        

        <label>E-mail</label> <br />
        <input value={userdata.email}
                type="email"
                 onChange={handlechange}
                  name="email" 
                  placeholder="Enter Your E-mail address" />
        <br />

        <br />
        {/* onChange={selectrole} rememer */}
        <label htmlFor="">Select Role : </label>
        <select id="select" onChange={selectrole} >
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>{" "}
        <br />

        <label for="">Password</label> <br />
        <input  value={userdata.password}
          type="password"
          onChange={handlechange}
          name="password" 
          placeholder=" Password" /> <br /> 


        <div>
            <button id="button"> Countinue </button>  
            {/* //convert in to input submit */}
            </div>
        <br />

        <span
          >Already have an account ?
         <b> Sign Up </b>
        </span>

        <p>
          By Continuing , i agree to the <b>Terms of Use</b>&
          <b>Privacy & Policy</b>
        </p>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Register