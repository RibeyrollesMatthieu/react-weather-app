import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { MeasureUnit, setMeasureUnit } from '../redux/features/preferencesSlice';

export const Header = () => {

  const measureUnit = useAppSelector(state => state.preferences.measure_unit);
  const dispatch = useAppDispatch();

  /**
   * Returns a new measure unit depending of the current one.
   * @param {MeasureUnit} measureUnit - The current measure unit. 
   * @returns {MeasureUnit} The next measure unit.
   */
  const getNext = (): MeasureUnit => {
    switch (measureUnit) {
      case MeasureUnit.CELSIUS: return MeasureUnit.FAHRENHEIT;
      case MeasureUnit.FAHRENHEIT: return MeasureUnit.KELVIN;
      default: return MeasureUnit.CELSIUS;
    }
  }

  const changeMeasureUnit = () => dispatch(setMeasureUnit(getNext()));

  return (
    <header>
      <button onClick={changeMeasureUnit}>Change to { getNext() }</button>
    </header>
  )
}
