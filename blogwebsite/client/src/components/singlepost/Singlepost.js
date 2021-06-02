import React from "react";
import "./singlepost.css";

const Singlepost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://expertphotography.com/wp-content/uploads/2019/11/Nature-Photographer-Marco-Grassi.png"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolaor sit amet.
          <div className="singlePostEdit">
            <i class=" singlePostIcon far fa-edit"></i>
            <i class=" singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            {" "}
            Author: <b> Kstha </b>
          </span>
          <span className="singlePostDate"> 1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          {" "}
          Consequat consectetur est cupidatat velit culpa laboris do
          exercitation est duis velit id enim do. Do sunt adipisicing pariatur
          consectetur culpa irure labore ut. Duis reprehenderit mollit dolor
          irure sit nisi quis qui culpa non commodo veniam dolor nostrud.
          Consequat consectetur est cupidatat velit culpa laboris do
          exercitation est duis velit id enim do. Do sunt adipisicing pariatur
          consectetur culpa irure labore ut. Duis reprehenderit mollit dolor
          irure sit nisi quis qui culpa non commodo veniam dolor nostrud.
          Consequat consectetur est cupidatat velit culpa laboris do
          exercitation est duis velit id enim do. Do sunt adipisicing pariatur
          consectetur culpa irure labore ut. Duis reprehenderit mollit dolor
          irure sit nisi quis qui culpa non commodo veniam dolor nostrud.
          Consequat consectetur est cupidatat velit culpa laboris do
          exercitation est duis velit id enim do. Do sunt adipisicing pariatur
          consectetur culpa irure labore ut. Duis reprehenderit mollit dolor
          irure sit nisi quis qui culpa non commodo veniam dolor nostrud.
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
