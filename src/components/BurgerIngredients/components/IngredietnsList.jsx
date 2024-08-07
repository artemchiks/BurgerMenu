import React, { useEffect, useRef, useState } from "react";
import styles from "./IngredietnsList.module.css";
import { Category } from "./Category";
import { IngredientType } from "../../../utils/types";
import IngridientsDialogBox from "../../DialogModal/IngridientsDialogBox";
import { useDispatch, useSelector } from "react-redux";
import { setIngridient } from "../../../service/ingridientDetalis";
const IngredietnsList = ({ setCurrent }) => {
  const list = useSelector((state) => state.ingridientList);
  const [active, setActive] = useState(false);
  function itemList(items) {
    return list.filter((item) => item.type === items);
  }
  const handleScroll = () => {
    const bunPosition = bunRef.current.getBoundingClientRect().top;
    const saucePosition = sauceRef.current.getBoundingClientRect().top;
    const mainPosition = mainRef.current.getBoundingClientRect().top;

    if (bunPosition < window.innerHeight && bunPosition >= 0) {
      setCurrent("one");
    } else if (saucePosition < window.innerHeight && saucePosition >= 0) {
      setCurrent("two");
    } else if (mainPosition < window.innerHeight && mainPosition >= 0) {
      setCurrent("three");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  const handleSelectItem = (item) => {
    dispatch(setIngridient(item));
    setActive(true);
  };

  return (
    <div className={styles["ingridie"]} onScroll={handleScroll}>
      <div ref={bunRef}>
        <Category
          title="Булки"
          items={bunList}
          handleSelectItem={handleSelectItem}
        />
      </div>
      <div ref={sauceRef}>
        <Category
          title="Соусы"
          items={sauceList}
          handleSelectItem={handleSelectItem}
        />
      </div>
      <div ref={mainRef}>
        <Category
          title="Начинки"
          items={mainList}
          handleSelectItem={handleSelectItem}
        />
      </div>
      <IngridientsDialogBox active={active} setActive={setActive} />
    </div>
  );
};
IngredietnsList.propTypes = {
  IngredientType,
};

export default IngredietnsList;
