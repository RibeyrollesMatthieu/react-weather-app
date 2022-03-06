import React from 'react'
import { useCurrentWeather } from '../../hooks/useCurrentWeather';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { MeasureUnit, setMeasureUnit } from '../../redux/features/preferencesSlice';
import { convert } from '../../utils/convertor';

/**
 * Returns a new measure unit depending of the current one.
 * @param {MeasureUnit} measureUnit - The current measure unit. 
 * @returns {MeasureUnit} The next measure unit.
 */
  export const getNext = (measureUnit: MeasureUnit): MeasureUnit => {
  switch (measureUnit) {
    case MeasureUnit.CELSIUS: return MeasureUnit.FAHRENHEIT;
    case MeasureUnit.FAHRENHEIT: return MeasureUnit.KELVIN;
    default: return MeasureUnit.CELSIUS;
  }
}

export const MeasureUnitsToggler = () => {
  const measureUnit = useAppSelector(state => state.preferences.measure_unit);
  const dispatch = useAppDispatch();

  const changeMeasureUnit = () => dispatch(setMeasureUnit(getNext(measureUnit)));

  return (
    <button onClick={changeMeasureUnit}>Change to { getNext(measureUnit) }</button>
  )
}
