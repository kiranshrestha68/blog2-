import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://png.pngtree.com/thumb_back/fh260/background/20191120/pngtree-sunset-nature-landscape-with-big-tree-image_322506.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"> Music </span>
          <span className="postCat"> Life </span>
        </div>
        <span className="postTitle"> Commodo nostrud enim sint.</span>
        <hr />
        <span className="postDate"> 1 hour ago </span>
      </div>

      <p className="postDescription">
        Consequat nisi ipsum magna voluptate occaecat anim laboris. Nostrud
        incididunt consectetur nostrud ex. Nostrud excepteur irure sunt
        reprehenderit duis dolor. Ipsum culpa laboris occaecat eu tempor velit
        commodo dolor cupidatat proident dolore ad. Fugiat adipisicing qui velit
        do adipisicing commodo eu quis.
      </p>
    </div>
  );
};

export default Post;
