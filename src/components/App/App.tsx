import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";
import { useDispatch, useSelector } from "react-redux";
import { setIngridients } from "../../service/ingridientListSlice";
import { BASE_URL, INGRIDIENTS_URL, ORDERS_URL } from "../pathUrl";
import { checkResponse } from "../checkResponse";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(INGRIDIENTS_URL);
        checkResponse(response);
        const data = await response.json();
        dispatch(setIngridients(data?.data || []));
      } catch (error) {
        console.log(error);
      }
    }

    fetchApi();
  }, []);

  return (
    <>
      <AppHeader />
      <ConstructorPage />
    </>
  );
}

export default App;
