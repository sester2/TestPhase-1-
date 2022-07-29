import React from "react";
import { useEffect } from "react";
import { fetchPosts } from "../api";
import NewPost from "./newposts";

const Posts = (props) => {
  const { originalposts, setoriginalposts } = props;

  console.log("These are my props:", props);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setoriginalposts(result);
      console.log("These are the posts: ", originalposts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <NewPost />
      <Posts
        // setoriginalposts={setoriginalposts}
        // originalposts={originalposts}
      />
      <div>
        {originalposts.map((posts) => {
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
        })}
      </div>
    </div>
  );
};
// Somewhere we could have the newPosts appear at the bottom of the page
export default Posts;
