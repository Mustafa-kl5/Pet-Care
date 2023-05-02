import React from "react";
import { Link } from "react-router-dom";
import "../../componentStyle/ProfilePage/Delete.css";
export default function DeletePost() {
  return (
    <Link to={"/Profile"}>
      <div className="delete-logo"></div>
    </Link>
  );
}
