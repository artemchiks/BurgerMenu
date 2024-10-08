import Modal from "./Modal";
import { ProgressSpinner } from "primereact/progressspinner";
import styles from "./dialogmodal.module.css";
const ModalLoader = ({ loading, onClose }:{loading:boolean;onClose?:()=>void}) => {
  return (
    <div>
      {loading ? (
        <div className={styles["loader__dialog"]}>
          <div>
            <p>Заказ оформляется.....</p>
            <ProgressSpinner className={styles["loader__dialog-spiner"]} />
          </div>
        </div>
      ) : (
        <p>Ошибка при оформлении заказа</p>
      )}
    </div>
  );
};

export default ModalLoader;
