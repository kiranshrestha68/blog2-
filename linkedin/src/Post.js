import { Avatar } from "@material-ui/core";
import React from "react";
import "./post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputOption from './InputOption';
import ChatOutLinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutLinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutLinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({name , description , message}) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar/>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
          <p>{message}</p>
      </div>

      <div className="post__buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
          <InputOption Icon={ChatOutLinedIcon} title="Comment" color="gray"/>
          <InputOption Icon={ShareOutLinedIcon} title="Share" color="gray"/>
          <InputOption Icon={SendOutLinedIcon} title="Send" color="gray"/>
      </div>
    </div>
  );
};

export default Post;
