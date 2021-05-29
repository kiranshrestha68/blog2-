import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me </span>
        <img
        className="sidebarImg"
          src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
          alt=""
        />
        <p>
          Dolor nostrud minim tempor non in culpa magna eiusmod pariatur quis
          mollit ea aliquip. Eiusmod veniam labore velit sit culpa exercitation
          veniam non minim. Pariatur est esse irure nostrud esse ullamco in amet
          reprehenderit eu est.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sideIcon fab fa-facebook-square"></i>
        <i className="sideIcon fab fa-twitter-square"></i>
        <i className="sideIcon fab fa-pinterest-square"></i>
        <i className="sideIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
