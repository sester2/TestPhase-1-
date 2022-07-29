import { useState } from "react";
import { createPost } from "../api";

const NewPost = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [willDeliver, setwillDeliver] = useState(true);
  //   const [price, setPrice] = useState("");
  //   const [location, setLocation] = useState("");
  const {
    title,
    setTitle,
    description,
    setDescription,
    willDeliver,
    setwillDeliver,
    price,
    setPrice,
    location,
    setLocation,
  } = props;

  console.log("This is my props from the NewPost: ", );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bestPosts = createPost(
      title,
      description,
      price,
      willDeliver,
      location
    );

    console.log("This is the new post: ", bestPosts);

    /*When someone types a messge into your form the handle submit function is going to grab the value of*/
  };

  // Trying to display the return of all newPosts with the new posts
  //
  return (
    <div className="newPost">
      <form>
        <input
          value={title}
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
            console.log(title);
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
          value={will}
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
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
        <p>testing testing </p>
      </form>
    </div>
  );
};

export default NewPost;
