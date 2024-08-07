import { useEffect } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";
import { useDispatch } from "react-redux";

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
