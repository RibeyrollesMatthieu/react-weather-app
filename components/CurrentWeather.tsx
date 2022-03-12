import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather';
import { useAppSelector } from '../redux/app/hooks';
import { getTemp } from '../utils/temp';
import styles from './../styles/CurrentWeather.module.scss';
import card from './../styles/Card.module.scss';
import Image from 'next/image';

/**
 * The element displaying the current weather data.
 * Fetches data and renders depending of it.  
 * Displayed fields: current temp / feels like temp
 */

export const CurrentWeather = () => {
  const measureUnit = useAppSelector(state => state.preferences.measure_unit);
  const city = useAppSelector(state => state.city.name);
  const { currentWeather, loading, error } = useCurrentWeather(city);

  return (
    <div className={`${card.card__big}`}>
      <div className={styles.date}>
        Today
        <span>{new Date().toLocaleDateString('locale', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</span>  
      </div>

      <div className={styles.weather}>
        {error && <>Whoops. Something went wrong.</>}
        {loading && <span>..</span>}
        {currentWeather && 
          <>
            <span className={styles.temp}>
              {getTemp(currentWeather.main.temp, measureUnit)} <span className={styles.units}>{measureUnit}  </span>
            </span>

            <span className={styles.icon}>
              <Image src={`http://openweathermap.org/img/wn/${currentWeather.weather.icon}@2x.png`} alt="" width={100} height={100}/>
            </span>
          </>  
        }
      </div>
      <div className={styles.location}>
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 6C11.25 9.75 6 13.25 6 13.25C6 13.25 0.75 9.75 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6V6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 7.25C6.69036 7.25 7.25 6.69036 7.25 6C7.25 5.30964 6.69036 4.75 6 4.75C5.30964 4.75 4.75 5.30964 4.75 6C4.75 6.69036 5.30964 7.25 6 7.25Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {city}
      </div>
    </div>
  )
}
