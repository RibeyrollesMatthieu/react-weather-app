import React, { useRef } from 'react'
import { useOutsideAlerter } from '../../hooks/useOutsidealerter';
import { useAppDispatch } from '../../redux/app/hooks';
import { MeasureUnit, setMeasureUnit } from '../../redux/features/preferencesSlice';
import styles from './../../styles/header/MeasureUnit.module.scss';

export const MeasureUnitsToggler = () => {
  const dispatch = useAppDispatch();
  const menuRef = useRef(null);

  const changeMeasureUnit = (measureUnit: MeasureUnit) => dispatch(setMeasureUnit(measureUnit));
  const toggleMenu = () => document.querySelector(`.${styles.container}`)?.classList.toggle(styles.open);
  const closeMenu = () => {
    if (document.querySelector(`.${styles.container}`)?.classList.contains(styles.open)) {
      document.querySelector(`.${styles.container}`)?.classList.remove(styles.open);
    }
  }

  useOutsideAlerter(menuRef, closeMenu);

  return (
    <div ref={menuRef} className={styles.menu}>
      <button onClick={toggleMenu} className={styles.opener}>
        Degrees
      </button>

      <ul className={styles.container}>
      {
        Object.values(MeasureUnit).map(unit => (
          <li key={unit}><button onClick={() => changeMeasureUnit(unit as MeasureUnit)}>{unit}</button></li>
        ))
      }
      </ul>
    </div>
  )
}
