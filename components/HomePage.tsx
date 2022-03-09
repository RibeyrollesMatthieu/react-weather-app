import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import styles from './../styles/Homepage.module.scss';
import { CurrentExtraData } from './CurrentExtraData';
import { Header } from './header/Header';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <Header />
      <CurrentWeather />
      <CurrentExtraData />
    </main>
  )
}
