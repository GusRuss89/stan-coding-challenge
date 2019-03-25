import React from 'react'
import styles from '../../theme/PageTitle.module.css'

const PageTitle = ({ title, onBack }) => {
  return (
    <header className={styles.root}>
      <div className="page-width">
        <div className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>
          {!!onBack && (
            <button className={styles.back} onClick={onBack}>
              Back
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default PageTitle
