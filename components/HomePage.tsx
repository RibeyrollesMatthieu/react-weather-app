import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import { CurrentExtraData } from './CurrentExtraData';
import { Header } from './header/Header';
import styles from './../styles/Homepage.module.scss';
import { Weathers } from './weathers/Weathers';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <Header />
      <CurrentWeather />
      <Weathers />
      <CurrentExtraData />
    </main>
  )
}
