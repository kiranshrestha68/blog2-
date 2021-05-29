import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node </span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.wbcsd.org/var/site/storage/images/media/images/nature-action/153104-1-eng-GB/Nature-Action_i1140.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
