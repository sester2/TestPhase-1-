import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../api";

const Login = (props) => {
  const {username, setUsername} = props;
  const {password, setPassword} = useState("");

  async function fetchUserLogin() {
    try {
      const token = await userLogin(username, password);
      localStorage.setItem("token", token);
      userLogin(username, password);

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="logBox">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Username: ", username, "password: ", password);
          fetchUserLogin();
          setUsername("");
          setPassword("");
        }}
      >
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
      <Routes>
        <Route path="/profile.jsx" />
      </Routes>
      
    </div>
  );
};

export default Login;
