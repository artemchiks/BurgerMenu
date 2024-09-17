import React, { useMemo } from 'react'
import styles from './orderFeedConstructor.module.css'
import { classNames } from 'primereact/utils'
import { Order } from '../../service/actions/ordersFeedActions';

type Props = {
  orders: Order[];
};

const OrderFeedCompleteInfo = ({ orders }: Props) => {

  const completedOrders = useMemo(() => orders.filter(order => order.status === "done").map(order => order.number).slice(0, 20), [orders]);
  const processingOrders = useMemo(() => orders.filter(order => order.status !== "done").map(order => order.number).slice(0, 20), [orders]);

  return (
    <div className={styles['order__compleate']}>
      <div className={styles['order__compleate-work']}>
<div className={styles['order__compleate-execute']}>
<p className="text text_type_main-medium">Готовы:</p>
<div className={classNames(styles['order__compleate-execute-text'],"text text_type_digits-default")}>
  {completedOrders.map(orderNumber => (<span key={orderNumber}>{orderNumber}</span>))}
</div>
</div>
<div className={styles['order__compleate-execute']}>
<p className="text text_type_main-medium">В работе:</p>
<div className={classNames(styles['order__compleate-execute-text'],"text text_type_digits-default")}>
  {processingOrders.map(orderNumber => (<span key={orderNumber}>{orderNumber}</span>))}
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
