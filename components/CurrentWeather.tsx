import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather';
import { useAppSelector } from '../redux/app/hooks';
import { initialState } from '../redux/features/preferencesSlice';
import { convert, roundValue } from '../utils/convertor';
import styles from './../styles/CurrentWeather.module.scss';
/**
 * The element displaying the current weather data.
 * Fetches data and renders depending of it.  
 * Displayed fields: current temp / feels like temp
 */
export const CurrentWeather = () => {
  const city = useAppSelector(state => (state.city.coords?.lat && state.city.coords?.lon) ? state.city.coords : state.city.name);
  const measureUnit = useAppSelector(state => state.preferences.measure_unit);
  const { currentWeather, loading, error } = useCurrentWeather(city);

  /**
   * Get the current temperature regarding of the current measure units.
   * @param {number} temp the actual temp
   * @returns {number} the converted temp
   */
  const getTemp = (temp: number): number => Math.round(convert(temp, initialState.measure_unit, measureUnit));

  if (error) return <>An error has occured.</>

  return (
    <div className={styles.container}>
      {loading && <>..</>} 
      {currentWeather && 
        <div className={styles.currentTemp}>
          <span>{getTemp(currentWeather.main.temp)}</span>
          <span className={styles.upper}> {measureUnit} </span>
        </div>}

      Feels like: {loading && <>Loading..</>} {currentWeather && getTemp(currentWeather.main.feels_like) + measureUnit}
    </div>
  )
}
