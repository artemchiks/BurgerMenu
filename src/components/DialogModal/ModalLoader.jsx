import Modal from "./Modal";
import { ProgressSpinner } from "primereact/progressspinner";
import styles from "./dialogmodal.module.css";
const ModalLoader = ({ active, setActive, loading }) => {
  const handleClose = () => {
    setActive(false);
  };

  return (
    <div>
      <Modal
        active={active}
        setActive={setActive}
        title={"Загрузка заказа"}
        onClose={handleClose}
      >
        {loading ? (
          <div className={styles["loader__dialog"]}>
            <div>
              <p>Заказ оформляется.....</p>
              <ProgressSpinner />
            </div>
          </div>
        ) : (
          <p>Ошибка при оформлении заказа</p>
        )}
      </Modal>
    </div>
  );
};

export default ModalLoader;
