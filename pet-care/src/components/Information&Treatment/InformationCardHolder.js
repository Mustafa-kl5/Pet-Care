import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "../../componentStyle/Information&Treatment/InformationCardHolder.css";
export default function InformationCardHolder(props) {
  return (
    <div
      className="Information-Holder"
      style={{
        paddingBottom: `${props.AnimalTypePaddingT}rem `,
        paddingLeft: `${props.AnimalTypePaddingL}rem`,
      }}
    >
      {props.children}
    </div>
  );
}
