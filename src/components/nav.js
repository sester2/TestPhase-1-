import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navBar">
      <div className="title">
        Stranger Things
        {localStorage.getItem("token") ? <> Logged in</> : <> Not Logged in</>}
      </div>
      <Link className="links" to="/posts">
        AllPosts
      </Link>
      <Link className="links" to="/profile">
        Profile
      </Link>
      <Link className="links" to="/Login">
        Login
      </Link>
      <Link className="links" to="/signin">
        Signup
      </Link>
    </div>
  );
};

export default Nav;

//implement logged in and sign up, create new posts for logged in users only
