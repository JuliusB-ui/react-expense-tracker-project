import ArrowUp from 'components/IconComponent/Arrows/ArrowUp'
import React from 'react'
import css from './DecorTab.module.css'

const DecorationTab = () => {
  return (
    <div className={css.decor}>
        <div className={css.arrowe}><ArrowUp /></div>
        <div>
          <p className={css.bal}>Your balance</p>
          <p className={css.balAmt}>$632.000</p>
        </div>
        <div className={css.increase}>+1.29%</div>
    </div>
  )
}

export default DecorationTab