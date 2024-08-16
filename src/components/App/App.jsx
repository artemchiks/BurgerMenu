import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchIngridients } from "../../service/actions/ingridientActions";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import ProfileOrders from "../pages/ProfileOrders";
import Home from "../pages/Home";
import ProtectedRoute from "../ProrectedRoute/ProtectedRoute";
import { fetchUserData } from "../../service/actions/userAuthActions";
import IngridinetPage from "../pages/IngridinetPage";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());

    dispatch(fetchIngridients());
  }, [dispatch]);

  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute authorized={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute authorized={false}>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRoute authorized={false}>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute authorized={false}>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute authorized>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/orders"
          element={
            <ProtectedRoute authorized>
              <ProfileOrders />
            </ProtectedRoute>
          }
        />
        <Route path="/profile/orders/:number" />
        <Route path="/ingredients/:id" element={<IngridinetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
