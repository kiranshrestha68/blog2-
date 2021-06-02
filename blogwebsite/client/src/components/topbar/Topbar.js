import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="  topListItem">
            {" "}
            <Link className="link" to="/">
              {" "}
              HOME
            </Link>{" "}
          </li>
          <li className="  topListItem">
            {" "}
            <Link className="link" to="/about">
              {" "}
              ABOUT{" "}
            </Link>{" "}
          </li>
          <li className="  topListItem">
            {" "}
            <Link className="link" to="/contact">
              {" "}
              CONTACT{" "}
            </Link>{" "}
          </li>
          <li className="  topListItem">
            {" "}
            <Link className="link" to="/write">
              {" "}
              WRITE{" "}
            </Link>{" "}
          </li>
          <li className="  topListItem"> LogOut </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
          alt=""
          className="topImg"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
