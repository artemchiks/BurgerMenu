import React from 'react'
import styles from './orderFeedConstructor.module.css'
import OrderFeedCart from './OrderFeedCart'
import OrderFeedCompleteInfo from './OrderFeedCompleteInfo'
import { checkResponse } from '../../utils/checkResponse'
import { PASSWORD_REST_EMAIL, WS_URL } from '../../utils/api'
const OrderFeedConstructor = () => {

  
  return (
 

    <div className={styles['order']}>
    <h1 className ="text text_type_main-large">Лента заказов</h1>
    <div className={styles['content__order']}>
      <div className={styles['content__order-detalis']}>
        <OrderFeedCart/>
        <OrderFeedCart/>
        <OrderFeedCart/>
        <OrderFeedCart/>
        <OrderFeedCart/>
        <OrderFeedCart/>
      </div>
      <div>
      <OrderFeedCompleteInfo/>
      </div>
      </div>
    </div>

  )
}

export default OrderFeedConstructor
