import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.js";
import NewPost from "./components/newposts";
import Posts from "./components/posts.js";
import Signup from "./components/signin.js";

const App = () => {
  const [token, setToken] = useState(null);
  const [originalposts, setoriginalposts] = useState([]);
  // console.log("This is the originalposts: ", originalposts);
  
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const result = await fetchPosts();
  //     setoriginalposts(result);
  //     console.log("These are the posts from API:", result);
  //   };
  //   getPosts();
  // }, []);

  // useEffect(() => {
  //   const localStorageToken = localStorage.getItem("token");
  //   if (localStorageToken) {
  //     setToken(localStorageToken);
  //   }
  //   console.log("INSIDE OUR USE EFFECT the toke is currently:", token);
  // }, [token]);

  return (
  //   <div>
  //     {/* <h1>
  //       These are the stranger things
  //     </h1>
  //   </div>
  //  */}
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/signin" element={<Signup />} />
          {/* <Route
            path="/"
            // element={
            //   // <Posts
            //   //   // setoriginalposts={setoriginalposts}
            //   //   // originalposts={originalposts}
            //   // />
            }
          /> */}
          {/* <Route path="/posts" element={<Posts
                setoriginalposts={setoriginalposts}
                originalposts={originalposts}/>} */}
          {/* /> */}
          {/* <Route path="/profile" element={<NewPost />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const element = document.getElementById("app");

const root = ReactDOM.createRoot(element);
root.render(<App />);
