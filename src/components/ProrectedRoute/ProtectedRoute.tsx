import React, { ReactNode } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { USER_SLICE } from "../../service/userSlice";
import { useAppSelector } from "../../hooks/hooksDispath";

interface ProtectedRouteProps {
  authorized: boolean;
  children: ReactNode;
}

const ProtectedRoute = ({
  children,
  authorized = true,
}: ProtectedRouteProps) => {
  const user = useAppSelector((state) => state[USER_SLICE]);
  const isLoggedIn = !!user;
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (authorized && !isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!authorized && isLoggedIn) {
    return <Navigate to={from} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
