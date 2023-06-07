import React from "react";
import "../../componentStyle/Information&Treatment/InformationCardHolder.css";
export default function InformationCardHolder(props) {
  return (
    <div className="Information-Holder-scroll">
      <div className="Information-Holder"> {props.children}</div>
    </div>
  );
}
