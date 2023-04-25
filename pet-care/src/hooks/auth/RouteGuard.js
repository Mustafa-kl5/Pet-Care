import React from "react";

import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function RouteGuard(props) {
  return useAuth() ? props.children : <Navigate to="/" />;
}
