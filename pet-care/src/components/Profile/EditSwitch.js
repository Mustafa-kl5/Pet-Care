import React from "react";

export default function EditSwitch(props) {
  const handleEditeStatus = () => {
    props.sendEdite();
  };
  return (
    <div className="edit-checkbox-word-input">
      <div className="edit-checkbox-word">Edite</div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleEditeStatus}
          checked={props.active}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
