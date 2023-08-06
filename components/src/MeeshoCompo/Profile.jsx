import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from './Context/Authcontext';
import "../MeeshoCompo/Profile.css"


const Profile = () => {
  const { login  } = useContext(Authcontext);

  const router = useNavigate();
  const [userData, setUserData] = useState({});
  console.log(userData, "abc");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    if (!currentUser) {
      router("/login");
    }
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    if (currentUser && allUsers) {
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
          setUserData(allUsers[i]);
        }
      }
    }
  }, []);

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value })
}

  function handleSubmit(event) {
    event.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    for (var i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
        allUsers[i].name = userData.name;
        allUsers[i].password = userData.password;
        currentUser.password = userData.password;
        currentUser.name = userData.name;
      }
    }

    login(currentUser);
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(allUsers));
    setUserData({})
    alert("Profile updated.");
  }

  return (
    <div id="profile">
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>Change Name</label><br />
                <input type='text' value={userData.name} name="name" onChange={handleChange} /><br />
                <label>Change Password</label><br />
                <input type='text' value={userData.password} name="password" onChange={handleChange} /><br />
                <input type='submit'/>
            </form>

        </div>
  );
}

export default Profile;