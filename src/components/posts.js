import React from "react";
import { useEffect } from "react";
import fetchPosts from "../api";
import NewPost from "./newposts";

const URL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B";

const Posts = (props) => {
  const { originalposts, setoriginalposts } = props;
  console.log("These are the posts all 32: ", originalposts);
  console.log("These are my props:", props);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${URL}/posts`);
        const results = await response.json();
        console.log("The posts from the cohort api:", results);
        setoriginalposts(results.data.posts);
        return results.data.posts;
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
     
      <NewPost />
      <div>
        {originalposts ? (
          originalposts.map((posts) => {
            return (
              <div>
                <div className="post-container" key={`all Post:${posts._id}`}>
                  <h1>{posts.title}</h1>
                  <h2>{posts.author.username}</h2>
                  <h3>{posts.description}</h3>
                  <h3>{posts.price}</h3>
                  <h3>{posts.location}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <h1>posts are loading</h1>
        )}
      </div>
    </div>
  );
};

export default Posts;
