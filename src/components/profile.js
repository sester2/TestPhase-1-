import React from "react";
import { useEffect, useState } from "react";
import { fetchUserPosts } from "../api";
import NewMsg from "./message";
import NewPost from "./newposts";

//I would like user to have access to see all the posts they have made

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const []= useState()

  useEffect(() => {
    const getPosts = async () => {
      const newToken = localStorage.getItem("token");
      

      const result = await fetchUserPosts(username);
      console.log("This is the newToken: ", );

      setPosts(result);
      console.log("These are the fetchuserposts:", result);
    };
    getPosts();
  });

  // I envisioned having the option of seeing the new-posts information that you made
  return (
    <div>
      <NewPost />
      <NewMsg />
      {posts.map((post) => {
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
