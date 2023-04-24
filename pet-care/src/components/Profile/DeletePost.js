import React from "react";

import "../../componentStyle/ProfilePage/Delete.css";
export default function DeletePost(props) {
  const PostID = props.PostID;
  const styles = props.style;

  const HandleDeleteClick = (PostID) => {
    console.log(PostID);
  };
  return (
    <div
      className="delete-logo"
      onClick={HandleDeleteClick}
      style={styles}
    ></div>
  );
}
