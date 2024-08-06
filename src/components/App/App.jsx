import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";
import { useDispatch, useSelector } from "react-redux";
import { setIngridients } from "../../service/ingridientListSlice";
import { BASE_URL, INGRIDIENTS_URL, ORDERS_URL } from "../pathUrl";
import { checkResponse } from "../checkResponse";
import { fetchIngridients } from "../../service/actions/ingridientActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngridients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <ConstructorPage />
    </>
  );
}

export default App;
