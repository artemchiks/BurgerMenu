import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";

import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchIngridients } from "../../service/actions/ingridientActions";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ResetPassword from "../../pages/ResetPassword";

import ForgotPassword from "../../pages/ForgotPassword";
import ProfileOrders from "../../pages/ProfileOrders";
import Home from "../../pages/Home";
import ProtectedRoute from "../ProrectedRoute/ProtectedRoute";
import { fetchUserData } from "../../service/actions/userAuthActions";
import IngridinetPage from "../../pages/IngridinetPage";
import IngredientDetails from "../DialogModal/IngredientDetails";
import Modal from "../DialogModal/Modal";
import { INGRIDIENT_DETALIS_SLICE } from "../../service/ingridientDetalis";
import { USER_SLICE } from "../../service/userSlice";
import { ProgressSpinner } from "primereact/progressspinner";
import { INGRIDIENT_LIST_SLICE } from "../../service/ingridientListSlice";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";
import { Orders, RootState } from "../../types/type";
import OrderFeed from "../../pages/OrderFeed";
import DialogFeed from "../DialogModal/DialogFeed";
import { ORDERS_SLICE } from "../../service/profileOrders";
import Order from "../../pages/Order";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location.pathname.split("/"));
  const background = location.state && location.state?.background;

  const isAuths = useSelector((state: RootState) => state[USER_SLICE]);

  const navigate = useNavigate();

  function close() {
    navigate(-1);
  }
  const ingridients = useSelector(
    (state: RootState) => state[INGRIDIENT_LIST_SLICE]
  );

  useEffect(() => {
    dispatch(fetchUserData() as any);
    dispatch(fetchIngridients() as any);
  }, [dispatch]);
  return (
    <>
      <AppHeader />
      {!ingridients && isAuths ? (
        <p>Загрузка</p>
      ) : (
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
          <Route path="/ingredients/:id" element={<IngridinetPage />} />
          <Route path="/feed" element={<OrderFeed />} />
          <Route path="/feed/:id" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={close} title={"Детали ингредиента"}>
                <IngredientDetails />{" "}
              </Modal>
            }
          />
        </Routes>
      )}
      {background && (
        <Routes>
          {" "}
          <Route
            path="/profile/orders/:id"
            element={
              <ProtectedRoute authorized>
                <Modal onClose={close}>
                  <DialogFeed />
                </Modal>
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
      {background && (
        <Routes>
          <Route
            path="/feed/:id"
            element={
              <Modal onClose={close}>
                <DialogFeed />{" "}
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
