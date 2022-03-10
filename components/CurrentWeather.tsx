import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather';
import { useAppSelector } from '../redux/app/hooks';
import { initialState } from '../redux/features/preferencesSlice';
import { convert } from '../utils/convertor';
import { getTemp } from '../utils/temp';
import styles from './../styles/CurrentWeather.module.scss';
/**
 * The element displaying the current weather data.
 * Fetches data and renders depending of it.  
 * Displayed fields: current temp / feels like temp
 */
export const CurrentWeather = () => {
  const measureUnit = useAppSelector(state => state.preferences.measure_unit);
  const city = useAppSelector(state => state.city.name);
  const { currentWeather, loading, error } = useCurrentWeather(city);

  if (error) return <>An error has occured.</>

  return (
    <div className={styles.container}>
      {loading && <>..</>} 
      {currentWeather && 

        <div className={styles.currentWeather}>
          <span className={styles.description}> 
            {currentWeather.weather.description} 
            <img src={`http://openweathermap.org/img/wn/${currentWeather.weather.icon}@2x.png`} alt="" />
          </span>


          <div className={styles.city}> {city.toUpperCase()} </div>
            
          <div className={styles.currentTemp}>
            <span>{getTemp(currentWeather.main.temp, measureUnit)}</span>
            <span className={styles.upper}> {measureUnit} </span>
          </div>

          <div> Feels like: {loading && <>Loading..</>} {getTemp(currentWeather.main.feels_like, measureUnit) + measureUnit} </div>
        </div>
      }

    </div>
  )
}
