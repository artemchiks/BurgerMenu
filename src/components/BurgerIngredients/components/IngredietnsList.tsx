import React, { useEffect, useRef, useState } from "react";
import styles from "./IngredietnsList.module.css";
import { Category } from "./Category";
import { setIngridient } from "../../../service/ingridientDetalis";
import { Ingredient } from "../../../types/type";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooksDispath";

interface IngredientsListProps {
  setCurrent: (current: string) => void;
}
const IngredietnsList = ({ setCurrent }: IngredientsListProps) => {
  const list = useAppSelector((state) => state.ingridientList);
  const [active, setActive] = useState<boolean>(false);
  const itemList = (items: string): Ingredient[] =>
    list.filter((item) => item.type === items);

  const dispatch = useAppDispatch();
  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");
  const bunRef = useRef<HTMLDivElement | null>(null);
  const sauceRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (bunRef.current && sauceRef.current && mainRef.current) {
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
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelectItem = (item: Ingredient) => {
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
    </div>
  );
};

export default IngredietnsList;
