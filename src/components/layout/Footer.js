import React from 'react'
import { ReactComponent as FacebookIcon } from '../../svg/facebook-white.svg'
import { ReactComponent as TwitterIcon } from '../../svg/twitter-white.svg'
import { ReactComponent as InstagramIcon } from '../../svg/instagram-white.svg'
import { ReactComponent as AppStoreIcon } from '../../svg/app-store.svg'
import { ReactComponent as PlayStoreIcon } from '../../svg/play-store.svg'
import { ReactComponent as WindowsStoreIcon } from '../../svg/windows-store.svg'
import styles from '../../theme/Footer.module.css'

const Footer = props => {
  return (
    <footer className={styles.root}>
      <div className="page-width">
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#collection">Collection Statement</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
              <li>
                <a href="#manage">Manage Account</a>
              </li>
            </ul>
          </nav>
          <p className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} DEMO Streaming. All rights reserved.
          </p>
          <div className={styles.icons}>
            <ul className={styles.social}>
              <li>
                <a href="https://facebook.com" rel="noreferrer noopener">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" rel="noreferrer noopener">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" rel="noreferrer noopener">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
            <ul className={styles.appStores}>
              <li>
                <a href="https://apple.com" rel="noreferrer noopener">
                  <AppStoreIcon />
                </a>
              </li>
              <li>
                <a href="https://google.com" rel="noreferrer noopener">
                  <PlayStoreIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://microsoft.com"
                  className={styles.windowsStoreIcon}
                  rel="noreferrer noopener"
                >
                  <WindowsStoreIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
