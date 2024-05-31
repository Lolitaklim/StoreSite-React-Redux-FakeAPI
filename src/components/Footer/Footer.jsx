import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from './../../utils/routes'
import LOGO from './../../images/logo.jpg'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="StoreSite" />
        </Link>
      </div>
      <div className={styles.rights}>
        Все права защищены котиком{' '}
        <a
          href="https://github.com/Lolitaklim/StoreSite-React-Redux-FakeAPI"
          target="_blank"
          rel="noreferrer"
        >
          github Lolitaklim
        </a>
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.instagram.com/lolita.klim"
          target="_blank"
          rel="noreferrer"
        >
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Footer
