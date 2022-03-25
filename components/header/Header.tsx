import React from 'react'
import styles from './../../styles/header/Header.module.scss';
import menuStyles from './../../styles/header/HeaderMenu.module.scss';
import { Menu } from './Menu';
import { Search } from './search/Search';

export const Header = () => {

  const toggleMenu = () => {
    document.querySelector(`.${menuStyles.menu}`)?.classList.toggle(menuStyles.open);
  }

  return (
    <header className={styles.header}>
      <div className={styles.settings}>
        <button className={styles.settingsButton} onClick={toggleMenu}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 14H2M17 4H8H17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 17C15.6569 17 17 15.6569 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6569 12.3431 17 14 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <Menu />
      </div>

      <h1>Weather Forecast</h1>

      <Search />
    </header>
  )
}
