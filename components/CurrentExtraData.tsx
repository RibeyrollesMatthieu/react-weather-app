import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather'
import { useAppSelector } from '../redux/app/hooks';
import styles from './../styles/CurrentExtraData.module.scss';

interface DataProps {
  title: string;
  data: {
    value: number;
    unit: string;
  }
}

const Data = ({ title, data }: DataProps) => {
  return (
    <div>
      {data.value}{data.unit} <br />
      <span className={styles.dataTitle}>{title}</span>
    </div>
  )
}

export const CurrentExtraData = () => {
  const city = useAppSelector(state => state.city.name);
  const { currentWeather, loading } = useCurrentWeather(city);

  if (loading) return <div className={styles.container}>...</div>

  const getVisibility = (value: number): { value: number, unit: string } => {
    if (value < 1_000) return { value, unit: 'm' };

    return { value: value / 1_000, unit: 'km' };
  }

  return (
    <div className={styles.container}>
      <Data title='Humidity' data={{ value: currentWeather.main.humidity, unit: '%' }} />
      <Data title='Visibility' data={ getVisibility(currentWeather.visibility) } />
      <Data title='Clouds' data={{ value: currentWeather.clouds, unit: '%' }} />
    </div>
  )
}
