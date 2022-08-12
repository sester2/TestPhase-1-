import React from "react";
import { useEffect, useState } from "react";
import fetchPosts from "../api";
import NewPost from "./newposts";
import { createMessage } from "../api";

const URL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B";

// steps:
// pass down username to create posts
// add username to post object
// fetch posts based on username
const Posts = (props) => {
  
  const { originalposts, setoriginalposts } = props;
  const [newMsg, setNewMsg] = useState("");

  // console.log("These are the posts all 32: ", originalposts);
  // console.log("These are my props:", props);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${URL}/posts`);
        // console.log("Posts= > ", response.data);
        const results = await response.json();
        // console.log("The posts from the cohort api:", results);
        setoriginalposts(results.data.posts);

        return results.data.posts;
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  // console.log(" Hello World");

  const createMessage = async (content, username) => {
    const token = localStorage.getItem("token");
    try {
      const newMessage = await fetch(`${URL}/posts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
        body: JSON.stringify({
          post: {
            message: {
              content,
            },
          },
        }),
      });
      const result = await newMessage.json();
      // console.log(result.data.posts);
      return result.data.posts;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("This is the new Message updating the State");

    createMessage(content);
    console.log("This is the updated State: ", createMessage);
  };
  return (
    <div>
      <NewPost />
      <div>
        {originalposts ? (
          originalposts.map((posts) => {
            return (
              <div key={`all Post:${posts._id}`}>
                <div className="post-container">
                  <h1>{posts.title}</h1>
                  <h2>{posts.author.username}</h2>
                  <h3>{posts.description}</h3>
                  <h3>{posts.price}</h3>
                  <h3>{posts.location}</h3>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        value={newMsg}
                        onChange={(event) => {
                          setNewMsg(event.target.value);
                          console.log(
                            "This is the event.target.value: ",
                            event.target.value
                          );
                        }}
                      ></textarea>
                      <button id="createMessage" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
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
