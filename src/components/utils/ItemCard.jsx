import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ItemCard = ({ item }) => {
  const count = 2;

  return (          <div
            key={item._id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
                position: 'relative',
            }}
          >
            <img src={item.image} alt={item.name} />
    { count && <Counter count={count} size="default" extraClass="m-1" /> }
            <p style={{ display: "flex", justifyContent: "center", gap: 5 }}>
              {" "}
              {item.price}
              <CurrencyIcon type="primary" />
            </p>
            <p className="text text_type_main-small">{item.name}</p>
          </div>
)
}
