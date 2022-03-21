import React from 'react'
import { Card } from './Card'
import styles from './../../styles/weathers/Weathers.module.scss';
import { useWeather } from '../../hooks/useWeather';
import { useAppSelector } from '../../redux/app/hooks';
import { getDateFromEpoch } from '../../utils/convertor';

export const Weathers = () => {

  const { coords } = useAppSelector(state => state.city);
  const { locale } = useAppSelector(state => state.preferences);
  const { weather, loading } = useWeather(coords as CityCoords);

  if (loading) return <>...</>

  return (
    <div className={styles.container}>
      {
        weather.hourly.slice(1, 6).map((forecast: any, index: number) => (
          <Card key={index} icon={forecast?.weather[0].icon} temp={forecast?.temp} title={getDateFromEpoch(forecast?.dt).toLocaleTimeString(locale, { hour: '2-digit' })}/>
        ))
      }
    </div>
  )
}
