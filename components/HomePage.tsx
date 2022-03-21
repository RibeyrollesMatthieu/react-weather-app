import React, { useEffect } from 'react'
import { CurrentWeather } from './CurrentWeather'
import { CurrentExtraData } from './CurrentExtraData';
import { Header } from './header/Header';
import styles from './../styles/Homepage.module.scss';
import { Weathers } from './weathers/Weathers';
import { useCityName } from '../hooks/useCityName';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { setName } from '../redux/features/citySlice';

export const HomePage = () => {

  const { coords } = useAppSelector(state => state.city);
  const { name } = useCityName(coords as CityCoords);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (name) dispatch(setName(name));
  }, [dispatch, name]);

  return (
    <main className={styles.container}>
      <Header />
      <CurrentWeather />
      <Weathers />
      <CurrentExtraData />
    </main>
  )
}
