import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { MeasureUnit, setMeasureUnit } from '../../redux/features/preferencesSlice';
import styles from './../../styles/header/MeasureUnit.module.scss';

export const MeasureUnitsToggler = () => {
  const dispatch = useAppDispatch();
  const currentUnit = useAppSelector(state => state.preferences.measure_unit);

  const changeMeasureUnit = (measureUnit: MeasureUnit) => dispatch(setMeasureUnit(measureUnit));

  return (
    <ul className={styles.container}>
    {
      Object.values(MeasureUnit).map(unit => (
        <li key={unit}>
          <button className={`${unit === currentUnit ? styles.active : ''} ${styles.button}`} onClick={() => changeMeasureUnit(unit as MeasureUnit)}>{unit}</button>
        </li>
      ))
    }
    </ul>
  )
}
