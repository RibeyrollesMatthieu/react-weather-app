import React, { useRef } from 'react'
import { useOutsideAlerter } from '../../hooks/useOutsidealerter';
import styles from './../../styles/header/HeaderMenu.module.scss';
import headerStyles from './../../styles/header/Header.module.scss';
import { MeasureUnitsToggler } from './MeasureUnitsToggler';

export const Menu = () => {
  const menuRef = useRef(null);

  const closeMenu = () => {
    const menu = document.querySelector(`.${styles.menu}`); 
    
    if (menu?.classList.contains(styles.open)) menu?.classList.remove(styles.open);
  }

  useOutsideAlerter(menuRef, closeMenu, headerStyles.settingsButton);

  return (
    <div className={styles.menu} ref={menuRef}>
      <MeasureUnitsToggler />
    </div>
  )
}
