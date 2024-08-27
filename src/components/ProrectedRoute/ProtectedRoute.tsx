import React, { ReactNode, useEffect, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { USER_SLICE } from "../../service/userSlice";
import { RootState } from "../../types/type";

interface ProtectedRouteProps {
  authorized: boolean; 
  children: ReactNode; 
}

const ProtectedRoute = ({  children, authorized = true }:ProtectedRouteProps) => {
  const user = useSelector((state:RootState) => state[USER_SLICE]);

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

  return <>{children}</>
};

export default ProtectedRoute;
