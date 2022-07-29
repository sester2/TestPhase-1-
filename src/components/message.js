import React from "react";
import { useState, useEffect } from "react";
import { createMessage } from "../API";

// import {profile} from "./profile";

const NewMsg = () => {
  const [newMsg, setNewMsg] = useState("");

  console.log(newMsg);

  useEffect(() => {
    const makeMsg = async () => {
      const result = await newMsg;
      setNewMsg(result);
    };
    makeMsg();
  });
  // When the click event is fired this should send a response to the API with

  // The handleSubmit is triggered by the submit button

  const handleChange = (event) => {
    this.setNewMsg(event.taget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createMessage();
  };

  return (
    <div>
      <form action="" method="post">
        <label for="fname">MessageBox</label>
        <input
          type="text"
          value={newMsg}
          placeholder="text"
          onChange={(e) => {
            this.setNewMsg(e.target.value);
            handleChange();
          }}
        ></input>
        <button
          id="my-submit-button"
          onClick={(e) => {
            console.log("Button click");
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewMsg;
