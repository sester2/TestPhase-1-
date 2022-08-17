import React from "react";
import { useEffect, useState } from "react";
import { fetchUserPosts } from "../api";
import NewPost from "./newposts";

const URL =
  "https://strangers-things.herokuapp.com/api/";
  
//I would like user to have access to see all the posts they have made

const Profile = () => {
  /*not sure if I need the pos*/
  // const [posts, setPosts] = useState([]);
  // const [] = useState();

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const newToken = localStorage.getItem("token");
  //     console.log("this is the newToken: ", newToken);
  //     const result = await fetchUserPosts(username);
  //     console.log("This is the users post: ", result);

  //     setPosts(result);
  //     console.log("These are the fetchuserposts:", result);
  //   };
  //   getPosts();
  // });

  //Here in profile I want to retrieve the posts so that I can see them.
  // I envisioned having the option of seeing the new-posts information that you made

  const getUsers = async () => {
    console.log("We are getting the messagaes: ", getUsers);
    try {
      const user = await fetch(`${URL}/206-FTB-ET-WEB-FT-B/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          
        },
      });
      const messagesResults = await user.json();
      return messagesResults.data.user;
    } catch (err) {
      console.error("Unable to fetch messages", err);
    }
  };
  return (
    <div>
      <getUsers />
    
      {newPost.map((post) => {
        return (
          <div className="post-container" key={`all Post:${post._id}`}>
            <h1>{post.title}</h1>
            <h2>{post.author.username}</h2>
            <h3>{post.description}</h3>
            <h3>{post.price}</h3>
            <h3>{post.location}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default Profile;
