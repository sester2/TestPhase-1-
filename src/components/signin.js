import React from "react";
import { useState } from "react";
import { userSignUP } from "../api";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function fetchUserSignup() {
    try {
      const token = await userSignUP(username, password);
      localStorage.setItem("token", token);
      setToken(token);
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
          fetchUserSignup();
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
