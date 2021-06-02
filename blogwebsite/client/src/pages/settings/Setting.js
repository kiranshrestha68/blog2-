import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Setting = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update your Account</span>
          <span className="settingsDeleteTitle"> Delete Account </span>
        </div>
        <form className="settingsForm">
          <label> Profile Picture </label>
          <div className="settingsPP">
            <img
              src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Kstha" />
          <label>Email</label>
          <input type="text" placeholder="Kstha@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit"> Update </button>
         
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
