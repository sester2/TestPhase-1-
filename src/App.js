import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.js";
import NewPost from "./components/newposts";
import Posts from "./components/posts.js";
import Signup from "./components/signin.js";
import Login from "./components/login.js";



const App = () => {
  const [], setToken] = useState(null);
  const [originalposts, setoriginalposts] = useState([]);
/*
I want to utilize the username to tag new posts and retrieve them later 


*/







  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Signin" element={<Signup />} />

          <Route path="/posts" element={<Posts
                // username = {username}
                setoriginalposts={setoriginalposts}
                originalposts={originalposts}
              />} />

          <Route
            path="/"
            element={
              <Login />
            }
          />
          <Route path="/profile" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const element = document.getElementById("app");

const root = ReactDOM.createRoot(element);
root.render(<App />);
