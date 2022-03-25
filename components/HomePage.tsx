import React, { useEffect, useState } from 'react'
import { CurrentWeather } from './CurrentWeather'
import { CurrentExtraData } from './CurrentExtraData';
import { Header } from './header/Header';
import styles from './../styles/Homepage.module.scss';
import { Hourlies } from './weathers/Hourlies';
import { useCityName } from '../hooks/useCityName';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { setName } from '../redux/features/citySlice';
import { setLocale } from '../redux/features/preferencesSlice';
import { Dailies } from './weathers/Dailies';

const weathersDisplay = [
  { title: '12 hours forecast', jsx: <Hourlies /> },
  { title: '7 days forecast', jsx: <Dailies />}
]

export const HomePage = () => {

  const { coords } = useAppSelector(state => state.city);
  const { name } = useCityName(coords as CityCoords);
  const dispatch = useAppDispatch();
  const [ weathers, setWeathers ] = useState<number>(0);

  useEffect(() => {
    document.addEventListener('keyup', e => {

      if (e.key.toLowerCase() === ' ' && e.ctrlKey) {
        if (document.querySelector(`#city-input`)) {
          (document.querySelector(`#city-input`) as HTMLInputElement).focus(); 
        }
      }
    })
  }, []);

  useEffect(() => {
    if (name) dispatch(setName(name));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(setLocale(navigator?.language || 'locale'));
  }, [dispatch]);

  const changeWeathers = (index: number) => setWeathers(index); 

  return (
    <main className={styles.container}>
      <Header />
      <CurrentWeather />

      <div className={styles.weathers}>
      {
        weathersDisplay.map((display, index) => (
          <button className={weathers === index ? styles.active : ''} key={display.title} onClick={() => changeWeathers(index)}>{display.title}</button>
        ))
      }
      </div>

      { weathersDisplay[weathers].jsx }

      <CurrentExtraData />
    </main>
  )
}
