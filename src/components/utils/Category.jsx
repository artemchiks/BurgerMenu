import { ItemCard } from "./ItemCard"
import styles from './data.module.css'

export const Category = ({ title, items }) => {
  return (
    <div>
      <div>{title}</div>
      <div className={styles.itemsList} >
        {items?.map(item => <ItemCard item={item} />)}
      </div>
    </div>
  )
}
