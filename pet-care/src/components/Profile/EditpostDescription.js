import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/EditpostDescription.css";

export default function EditpostDescription(props) {
  const [description, setDescription] = useState(props.description);
  useEffect(() => {
    setDescription(props.description);
  }, [props.description]);

  useEffect(() => {
    props.sendNewDescription(description);
  }, [description]);

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div className="edit-decription-holder">
      <div className="edit-decription-word">Post Description</div>
      <textarea
        className="edit-decription-input"
        disabled={props.active}
        value={description}
        onChange={handleDescription}
      />
    </div>
  );
}
