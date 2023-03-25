import React from "react";
import "../PagesStyle/BackGround.css";
import LoginForm from "../components/LoginForm";

export default function Login(props) {
  return (
    <div className="pages-background">
      <LoginForm />
    </div>
  );
}
