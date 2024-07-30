import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";
import { useDispatch, useSelector } from "react-redux";
import { setIngridients } from "../../service/ingridientListSlice";

function App() {
  const url = "https://norma.nomoreparties.space/api/ingredients";
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Could not fetch");
        }
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
      <ConstructorPage list={[]} />
    </>
  );
}

export default App;
