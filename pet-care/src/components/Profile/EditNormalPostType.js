import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/EditNormalPostType.css";

export default function EditNormalPostType(props) {
  const [type, setType] = useState(props.postType);
  useEffect(() => {
    setType(props.postType);
  }, [props.postType]);
  useEffect(() => {
    props.sendNewType(type);
  }, [type]);
  const handleType = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="edit-post-type-holder">
      <div className="edit-post-type-word">Post Type</div>
      <select
        className="edit-post-type-select"
        disabled={props.active}
        value={type}
        onChange={handleType}
      >
        <option value={"missing"}>Missing</option>
        <option value={"asking"}>Asking</option>
      </select>
    </div>
  );
}
