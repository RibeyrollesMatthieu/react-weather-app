import React from 'react'
import { useWeather } from '../../hooks/useWeather'
import { useAppSelector } from '../../redux/app/hooks'
import { getDateFromEpoch } from '../../utils/convertor';
import styles from './../../styles/weathers/Weathers.module.scss';
import { Card } from './Card';

export const Dailies = () => {

  const { coords } = useAppSelector(state => state.city);
  const { locale } = useAppSelector(state => state.preferences);
  const { weather, loading } = useWeather(coords as CityCoords);

  if (loading) return <>...</>

  return (
    <div className={styles.container}>
      {
        weather.daily.slice(1, 8).map((forecast: any, index: number) => (
          <Card key={index} icon={forecast?.weather[0].icon} temp={forecast?.temp.day} title={getDateFromEpoch(forecast?.dt).toLocaleDateString(locale, { weekday: 'long' })}/>
        ))
      }
    </div>
  )
}
