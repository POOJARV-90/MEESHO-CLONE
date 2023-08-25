import React, { useContext, useState } from 'react';
import "../MeeshoCompo/Login.css"
import { useNavigate } from "react-router-dom";
import {Authcontext} from "./Context/Authcontext"
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {
  const {state , dispatch } = useContext(Authcontext)
  const [userdata, setUserdata] = useState({ email: "", password: "" ,role :""});
  const router = useNavigate();

  const hangleChange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if ( userdata.email && userdata.password) {
      
            const response = await axios.post("http://localhost:8000/login", { userdata });
            if (response.data.success) {
           

            dispatch({
              type: 'LOGIN',
              payload: response.data.user
          })
          localStorage.setItem("token", JSON.stringify(response.data.token))
                setUserdata({ email: "", password: "" })
                router('/')
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }

       
    } else {
        toast.error("All fields are mandtory.")
    }
}

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
