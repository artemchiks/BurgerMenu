import { useEffect } from "react";
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngridients());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/login/forgot-password" element={<ResetPassword />} />
        <Route path="/login/register" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
