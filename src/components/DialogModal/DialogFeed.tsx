import { useSelector } from "react-redux";
import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { RootState } from "../../types/type";
import { ORDERS_SLICE } from "../../service/profileOrders";
import { INGRIDIENT_LIST_SLICE } from "../../service/ingridientListSlice";
import { useMemo } from "react";
import { getDateDiff } from "../../utils/datetime";
import moment from "moment";
type Order = {
  number: string;
  name: string;
  status: string;
  ingredients: [];
  createdAt: Date;
};
const DialogFeed = () => {
  const orders = useSelector(
    (state: RootState) => state[ORDERS_SLICE].orders as Order[]
  );
  const { id } = useParams<{ id: string }>();

  const info = orders.find((order) => order.number.toString() === id);
  const orderCreatedTime = useMemo(() => {
    if (!info) return "";

    const daysDiff = getDateDiff(info.createdAt);
    const time = moment(info.createdAt).format("HH:mm");

    return `${daysDiff}, ${time}`;
  }, [info?.createdAt]);

  const ingridients = useSelector(
    (state: RootState) => state[INGRIDIENT_LIST_SLICE]
  );

  const { imgs, ordersNames, pris } = useMemo(() => {
    const images: (string | undefined)[] = [];
    const names: (string | undefined)[] = [];
    const price: number = 0;
    info?.ingredients.forEach((ingridientId) => {
      const ingridient = ingridients.find((ing) => ing._id === ingridientId);
      if (ingridient) {
        images.push(ingridient.image);
        names.push(ingridient.name);
      }
    });

    return { imgs: images, ordersNames: names, pris: price };
  }, [info, ingridients]);
  return (
    <div>
      {info && (
        <div>
          <p className="text text_type_main-medium">#{info.number}</p>
          <p>{info.name}</p>
          <p>{info.status}</p>

          <div>
            <p>Состав:</p>
            <ul>
              {ordersNames?.map((name, key) => (
                <li key={key}>{name}</li>
              ))}
              {imgs?.map((img, key) => (
                <li className={styles.item} key={key}>
                  <img className={styles.image} src={img} alt="ingredient" />
                </li>
              ))}
            </ul>
          </div>
          <div>{orderCreatedTime}</div>
        </div>
      )}
    </div>
  );
};

export default DialogFeed;
