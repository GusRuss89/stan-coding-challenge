import React from 'react'
import styles from '../../theme/Header.module.css'

const Header = props => {
  return (
    <header className={styles.root}>
      <div className="page-width">
        <div className={styles.inner}>
          <h1 className={styles.logo}>DEMO Streaming</h1>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <a href="#login">Log in</a>
              </li>
              <li className={styles.navButton}>
                <a href="#trial">Start your free trial</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
