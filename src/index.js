import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.js";
import NewPost from "./components/newposts";
import Posts from "./components/posts.js";
import Signup from "./components/signin.js";
import Login from "./components/login.js";

const App = () => {
  const [token, setToken] = useState(null);
  const [originalposts, setoriginalposts] = useState([]);
  // console.log("This is the originalposts: ", originalposts);

  // useEffect(() => {
  //   const localStorageToken = localStorage.getItem("token");
  //   if (localStorageToken) {
  //     setToken(localStorageToken);
  //   }
  //   console.log("INSIDE OUR USE EFFECT the toke is currently:", token);
  // }, [token]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/signin" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Posts
                setoriginalposts={setoriginalposts}
                originalposts={originalposts}
              />
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
