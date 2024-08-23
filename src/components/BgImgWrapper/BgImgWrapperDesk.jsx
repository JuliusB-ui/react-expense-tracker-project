import React from 'react'
import image from '../../images/desktop-background.jpg'
import DecorationTab from 'components/DecorationTab/DecorationTab'
import css from './BgImgWrapper.module.css'

export const BgImgWrapperDesk = () => {
  return (
    <div>
        <img src={image} alt="couples managing finances" />
        <div className={css.decorTab}><DecorationTab/></div>
    </div>
  )
}
