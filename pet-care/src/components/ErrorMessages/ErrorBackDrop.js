import React from "react";
import "../../componentStyle/ErrorMessages/ErrorBackDrop.css";
export default function ErrorBackDrop(props) {
  console.log(props.show);
  return true ? (
    <div className="Error-Holder">
      <div className="Error-Message">
        The password that you've entered is incorrect
      </div>
      <div className="Hr"></div>
      <button className="ok-button" onClick={props.CloseBackDrop}>
        OK
      </button>
    </div>
  ) : null;
}
