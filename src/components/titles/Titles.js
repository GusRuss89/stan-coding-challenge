import React from 'react'
import Title from './Title'
import styles from '../../theme/Titles.module.css'

const Titles = ({ titles }) => {
  return (
    <article className={styles.root}>
      {titles.map(title => (
        <div key={title.title} className={styles.title}>
          <Title title={title} />
        </div>
      ))}
    </article>
  )
}

export default Titles
