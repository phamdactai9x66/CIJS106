import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectRoute = (props) => {
  const isLogin = props.isLogin;

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return props.children;
};

export default ProtectRoute;
