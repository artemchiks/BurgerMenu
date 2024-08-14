import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";
import { useDispatch } from "react-redux";
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

function App() {
  const dispatch = useDispatch();

  const [isLoggudIn, setLogedIn] = useState(false);

  useEffect(() => {
    dispatch(fetchIngridients());
  }, [dispatch]);

  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={<ProtectedRoute element={<Register />} />}
        />
        <Route
          path="/forgot-password"
          element={<ProtectedRoute element={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<ProtectedRoute element={<ResetPassword />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/profile/orders"
          element={<ProtectedRoute element={<ProfileOrders />} />}
        />
        <Route path="/profile/orders/:number" />
      </Routes>
    </Router>
  );
}

export default App;
