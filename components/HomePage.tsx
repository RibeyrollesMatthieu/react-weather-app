import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import styles from './../styles/Homepage.module.scss';
import { useAppSelector } from '../redux/app/hooks';
import { CurrentExtraData } from './CurrentExtraData';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <CurrentWeather />
      <CurrentExtraData />
    </main>
  )
}
