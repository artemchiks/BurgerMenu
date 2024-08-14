import React, { useEffect, useState } from "react";
import useAuth from "../hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

const ProtectedRoute = ({ children, anonymous = false }) => {
  const isLoggedIn = getCookie("accessToken");
  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
