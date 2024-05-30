import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from './../../utils/routes'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src="" />
        </Link>
      </div>
    </div>
  )
}

export default Header
