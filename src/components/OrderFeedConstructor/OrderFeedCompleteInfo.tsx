import React from 'react'
import styles from './orderFeedConstructor.module.css'
import { classNames } from 'primereact/utils'
const OrderFeedCompleteInfo = () => {
  return (
    <div className={styles['order__compleate']}>
      <div className={styles['order__compleate-work']}>
<div className={styles['order__compleate-execute']}>
<p className="text text_type_main-medium">Готовы:</p>
<div className={classNames(styles['order__compleate-execute-text'],"text text_type_digits-default")}>
    <p>034533</p>
    <p>034533</p>
    <p>034533</p>
    <p>034533</p>
    <p>034533</p>
</div>
</div>
<div>
<p className="text text_type_main-medium">В работе:</p>
<div className="text text_type_digits-default">
<p>034533</p>
<p>034533</p>
</div>
</div>
      </div>

      <div className={styles['order__compleate-work__foralltime']}>

<p className="text text_type_main-medium">Выполнено за все время:</p>

<p className={classNames(styles['order__compleate-work__foralltime-sum'],"text text_type_digits-large")}>28 752</p>
      </div>

      <div className={styles['order__compleate-work__foralltime']}>

<p className="text text_type_main-medium">Выполнено за сегодня:</p>

<p className={classNames(styles['order__compleate-work__foralltime-sum'],"text text_type_digits-large")}>138</p>
      </div>
    </div>
  )
}

export default OrderFeedCompleteInfo
