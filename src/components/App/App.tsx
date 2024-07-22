import { useEffect, useState } from "react";
import "../App/App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../pages/ConstructorPage/Index";

function App() {
  const url = "https://norma.nomoreparties.space/api/ingredients";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Could not fetch");
        }
        const data = await response.json();
        setData(data?.data || []);
      } catch (error) {
        console.log(error);
      }
    }

    fetchApi();
  }, []);

  return (
    <>
      <AppHeader />
      <ConstructorPage list={data} />
    </>
  );
}

export default App;
