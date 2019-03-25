import React from 'react'
import styles from '../../theme/Title.module.css'

const Title = ({ title }) => {
  const image = title.images['Poster Art']
  return (
    <article className={styles.root}>
      <div className={styles.imgWrap}>
        <img
          className={styles.image}
          src={image.url}
          alt={title.title}
          width={image.width}
          height={image.height}
        />
      </div>
      <h2 className={styles.title}>{title.title}</h2>
    </article>
  )
}

export default Title
