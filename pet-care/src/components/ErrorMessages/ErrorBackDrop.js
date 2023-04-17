import React from "react";
import "../../componentStyle/ErrorMessages/ErrorBackDrop.css";
export default function ErrorBackDrop(props) {
  return props.show ? (
    <div className="Error-Holder-main">
      <div className="Error-Holder">
        <div className="Error-Message">
          The password that you've entered is incorrect
        </div>

        <button className="ok-button" onClick={props.CloseBackDrop}>
          OK
        </button>
      </div>
    </div>
  ) : null;
}
