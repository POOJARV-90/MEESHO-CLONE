import React, { useContext, useState } from 'react';
import "../MeeshoCompo/Login.css"
import { useNavigate } from "react-router-dom";
import {Authcontext} from "./Context/Authcontext"

const Login = () => {
  const {state , login} = useContext(Authcontext)
  const [userdata, setUserdata] = useState({ email: "", password: "" ,role :""});
  const router = useNavigate();

  const hangleChange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userdata.email && userdata.password) {
      const users = JSON.parse(localStorage.getItem("Users")); //access to LS

      var flag = false;
      for (var i = 0; i < users.length; i++) {
        if (
          users[i].email == userdata.email &&
          users[i].password == userdata.password
        ) {
          flag = true;
          localStorage.setItem(("CurrentUser"),JSON.stringify( users[i]));
          login(users[i]);
          alert("login succesfull")
          setUserdata({email:"",password:"",role :"" })
          router("/");
          break;
        }
      }
      if (flag == false) {
           alert("Please check credentials.");   //RETURN
      }
      
    } else {
      alert("Please submit all details");
    }
  };

  return (
    <div>
      <div id="reg-pg">
        <div>
          <div>
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Sign up or Register</h2>
            <label >E-mail</label> <br />
            <input name="email" 
            onChange={hangleChange}
             value={userdata.email}
              placeholder="Enter Your email address" /><br />
              
            <label >Password</label> <br />
            <input  type="password"
             name="password" 
             onChange={hangleChange}
              value={userdata.password}
               placeholder="Enter Your Password" /> <br />

            <div id="signin">
              <button id="button">Sign up</button>
            </div>
            <span>Don't have an account? <b onClick={()=>router("/Register")} >register here </b> </span>
            <p>By Continuing, I agree to the <b>Terms of Use</b> &amp; <b>Privacy &amp; Policy</b></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
