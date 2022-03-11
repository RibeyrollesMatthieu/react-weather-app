import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import { CurrentExtraData } from './CurrentExtraData';
import { Header } from './header/Header';
import styles from './../styles/Homepage.module.scss';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <Header />
      <CurrentWeather />
      <CurrentExtraData />
    </main>
  )
}
