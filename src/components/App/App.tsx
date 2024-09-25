import { useEffect } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
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
import { USER_SLICE } from "../../service/userSlice";
import { INGRIDIENT_LIST_SLICE } from "../../service/ingridientListSlice";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";
import OrderFeed from "../../pages/OrderFeed";
import DialogFeed from "../DialogModal/DialogFeed";
import Order from "../../pages/OrderDetalis";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksDispath";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathArray = location.pathname.split("/").filter(Boolean);
  const lastElement = pathArray[pathArray.length - 1];
  const background = location.state && location.state?.background;

  const isAuths = useAppSelector((state) => state[USER_SLICE]);

  const navigate = useNavigate();

  function close() {
    navigate(-1);
  }
  const ingridients = useAppSelector((state) => state[INGRIDIENT_LIST_SLICE]);

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchIngridients());
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
          <Route
            path="/profile/orders/:id"
            element={
              <ProtectedRoute authorized>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/ingredients/:id" element={<IngridinetPage />} />
          <Route path="/feed" element={<OrderFeed />} />
          <Route path="/feed/:id" element={<Order />} />
          <Route path="/*" element={<NotFound />} />
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
          <Route
            path="/feed/:id"
            element={
              <Modal onClose={close} title={`#${lastElement}`}>
                <DialogFeed />{" "}
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <ProtectedRoute authorized>
                <Modal onClose={close} title={`#${lastElement}`}>
                  <DialogFeed />
                </Modal>
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
