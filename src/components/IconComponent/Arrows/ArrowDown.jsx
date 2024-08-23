import React from 'react'
import css from './Arrow.module.css'
import sprite from '../../../images/icons.svg'

const ArrowDown = () => {
  return (
    <div className={css.arrowDiv}>
        <svg xmlns="http://www.w3.org/2000/svg" className={css.arrow} >
            <use  xlinkHref={`${sprite}#arrow-down`}/>
        </svg>
    </div>
  )
}

export default ArrowDown