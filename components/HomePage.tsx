import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import styles from './../styles/Homepage.module.scss';
import { useAppSelector } from '../redux/app/hooks';

export const HomePage = () => {

  const city = useAppSelector(state => state.city.name);

  return (
    <main className={styles.container}>
      <div className={styles.city}>{city.toUpperCase()}</div>
      <CurrentWeather />
    </main>
  )
}
