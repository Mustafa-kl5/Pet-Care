import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "../../componentStyle/Information&Treatment/InformationCardHolder.css";
import { Link } from "react-router-dom";
export default function InformationCardHolder(props) {
  // const useNav = useNavigate();
  // const HandleClick = () => {
  //   useNav("/Store");
  // };
  return (
    <div
      className="Information-Holder"
      style={{
        paddingTop: `${props.AnimalTypePaddingT}rem `,
        paddingLeft: `${props.AnimalTypePaddingL}rem`,
      }}
    >
      {props.children}
    </div>
  );
}
