import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import IngredientDetails from "../DialogModal/IngredientDetails";
import Modal from "../DialogModal/Modal";
import { INGRIDIENT_DETALIS_SLICE } from "../../service/ingridientDetalis";
import { USER_SLICE } from "../../service/userSlice";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  console.log(background);
  const user = useSelector((state) => state[USER_SLICE]);
  const navigate = useNavigate();

  const ingredient = useSelector((state) => state[INGRIDIENT_DETALIS_SLICE]);
  console.log(ingredient);
  function close() {
    navigate(-1);
  }

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchIngridients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />

      <Routes location={background || location}>
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
          path="/profile"
          element={
            <ProtectedRoute authorized>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/ingredients/:id" element={<IngridinetPage />} />
      </Routes>

      {ingredient && background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={close} title={"Детали ингредиента"}>
                <IngredientDetails data={ingredient} />{" "}
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
