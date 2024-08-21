import React, { useEffect, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { USER_SLICE } from "../../service/userSlice";
import { PAGE_SLICE } from "../../service/pageSlice";

const ProtectedRoute = ({ children, authorized = true }) => {
  const user = useSelector((state) => state[USER_SLICE]);
  const page = useSelector((state) => state[PAGE_SLICE]);
  const isLoggedIn = !!user;

  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  if (authorized) {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
  } else {
    if (isLoggedIn) {
      return <Navigate to={from} />;
    }
  }

  return children;
};

export default ProtectedRoute;
