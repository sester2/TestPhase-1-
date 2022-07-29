import { useState } from "react";
import { createPost } from "../api";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [willDeliver, setwillDeliver] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
    console.log("What is the bestPost: ");
    event.preventDefault();

    createPost(title, description, price, willDeliver, location);
    console.log("This is the updated State: ", createPost);
  };

  return (
    <div className="newPost">
      <form>
        <input
          value={title}
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
            console.log("This is the value of the onChange for title :", title);
          }}
          placeholder="title"
        ></input>

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
        ></input>
        <input
          type="text"
          onChange={(event) => {
            setLocation(event.target.value);
            console.log(location);
          }}
          placeholder="Location "
        ></input>
        <input
          value={price}
          type="text"
          onChange={(event) => {
            setPrice(event.target.value);
            console.log(price);
          }}
          placeholder="Price"
        ></input>

        <button id="form_button" type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
