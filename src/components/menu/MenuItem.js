import React from 'react'
import styles from '../../theme/MenuItem.module.css'
import titleStyles from '../../theme/Title.module.css'

const MenuItem = ({ title, onClick, imgText }) => {
  return (
    <div className={titleStyles.root} onClick={onClick}>
      <div className={`${titleStyles.imgWrap} ${styles.imgWrap}`}>
        <img
          className={`${titleStyles.image} ${styles.image}`}
          src="/placeholder.png"
          alt={imgText}
        />
        <span className={titleStyles.imgText}>{imgText}</span>
      </div>
      <h2 className={titleStyles.title}>{title}</h2>
    </div>
  )
}

export default MenuItem
