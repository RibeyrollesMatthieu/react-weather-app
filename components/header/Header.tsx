import React from 'react'
import { MeasureUnitsToggler } from './MeasureUnitsToggler';
import styles from './../../styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <MeasureUnitsToggler  />
    </header>
  )
}
