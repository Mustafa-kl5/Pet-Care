import React, { useState } from "react";

import "../../componentStyle/ProfilePage/EditPostComp.css";
import UpdatePostBackDrop from "./UpdatePostBackDrop";

export default function EditPostComp(props) {
  const [showbackdrop, setbackdrop] = useState(false);

  const HandleEditPostClick = () => {
    setbackdrop(true);
  };
  const HandleCloseBackdrop = () => {
    setbackdrop(false);
  };
  return (
    <>
      <div className="edit-logo" onClick={HandleEditPostClick}></div>
      <UpdatePostBackDrop
        show={showbackdrop}
        CloseBackDrop={HandleCloseBackdrop}
      />
    </>
  );
}
