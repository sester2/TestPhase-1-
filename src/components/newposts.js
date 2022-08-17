import { useState } from "react";

const URL =
  "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [willDeliver, setwillDeliver] = useState(false);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const createPost = async (
    title,
    description,
    price,
    willDeliver,
    location
  ) => {
    const token = localStorage.getItem("token");
    try {
      const newPost = await fetch(`${URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver,
            location,
          },
        }),
      });
      console.log("This is new posts: ", newPost);
      const result = await newPost.json();
      console.log("This is the results:", result);
      return result.data.posts;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("What is the bestPost: ");

    createPost(title, description, price, willDeliver, location);
    console.log("This is the updated State: ", createPost);
  };

  return (
    <div className="newPost">
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
            console.log("This is the value of the onChange for title :", title);
          }}
          placeholder="title"
        />

        <input
          value={description}
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
            console.log(description);
          }}
          placeholder="description"
        ></input>
        <input
          value={willDeliver}
          type="text"
          onChange={(event) => {
            setwillDeliver(event.target.value);
            console.log(willDeliver);
          }}
          placeholder="Will Deliver?"
        />
        <input
          type="text"
          onChange={(event) => {
            setLocation(event.target.value);
            console.log(location);
          }}
          placeholder="Location "
        />
        <input
          value={price}
          type="text"
          onChange={(event) => {
            setPrice(event.target.value);
            console.log(price);
          }}
          placeholder="Price"
        />

        <button id="form_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
