import React from "react";
export default function NoPostFound(props) {
  return (
    <div className="no-post-found">
      <div className="no-post-found-image" />
      <div className="no-post-found-word"> {props.massage}</div>
    </div>
  );
}
