import React from 'react'
import styles from './orderFeedConstructor.module.css'
import { classNames } from 'primereact/utils'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
const OrderFeedCart = () => {
  return (
    
    <div className={styles['order__carts']}>
        <div className={'pl-5 pr-5 pb-5 pt-5'}>
            <div className={styles['order__carts-content']}>
            <div className='order__carts-nubmer'>
            <p className="text text_type_main-medium">#034535</p>
            </div>
      <div className='order__carts-date' >
      <p className="text text_type_main-default text_color_inactive">Сегодня,16:20</p>
      </div>
</div>
<div className={styles['order__carts-name']}>
<p className="text text_type_main-medium">Death Star Starship Main бургер</p>
</div>
<div>

    <div className={styles['order__carts-content-img']}>

    </div>
    <div className={styles['order__carts-content-price']}>


    <p className="text text_type_main-medium">420</p>
    <CurrencyIcon type="primary" />
    </div>
</div>
      </div>
    </div>
  )
}

export default OrderFeedCart
