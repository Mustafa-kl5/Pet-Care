import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../componentStyle/ProfilePage/EditPostComp.css";
import AddPostBackDrop from "../NormalPost/AddPostBackDrop";
export default function EditPostComp() {
  const [backdrop, setbackdop] = useState(false);
  const HandleEditPostClick = () => {
    setbackdop(true);
  };
  return (
    <>
      <Link to={"/Profile"}>
        <div className="edit-logo" onClick={HandleEditPostClick}></div>
      </Link>

      <AddPostBackDrop show={backdrop} />
    </>
  );
}
