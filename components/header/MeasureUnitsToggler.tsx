import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { MeasureUnit, setMeasureUnit } from '../../redux/features/preferencesSlice';

export const MeasureUnitsToggler = () => {
  const dispatch = useAppDispatch();
  const changeMeasureUnit = (measureUnit: MeasureUnit) => dispatch(setMeasureUnit(measureUnit));

  return (
    <ul>
      {
        Object.values(MeasureUnit).map(unit => (
          <li key={unit}><button onClick={() => changeMeasureUnit(unit as MeasureUnit)}>{unit}</button></li>
        ))
      }
    </ul>
  )
}
