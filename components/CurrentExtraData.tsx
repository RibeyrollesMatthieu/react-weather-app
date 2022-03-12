import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather'
import { useAppSelector } from '../redux/app/hooks';
import { roundValue } from '../utils/convertor';
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
  const { currentWeather, loading, error } = useCurrentWeather(city);

  if (loading) return <div className={styles.container}>...</div>
  if (error) return <div>An error has occured</div>
  /**
   * Get a metric value and returns it as meters of kmilometers.
   * @param {number} value - the value to convert.
   * @returns {{ value: number, unit: string }} Object with the value and the units to use.
   */
  const getVisibility = (value: number): { value: number; unit: string; } => {
    if (value < 1_000) return { value, unit: 'm' };

    return { value: roundValue(value / 1_000), unit: 'km' };
  }

  return (
    <div className={styles.container}>
      <Data title='Humidity' data={{ value: currentWeather.main.humidity, unit: '%' }} />
      <Data title='Visibility' data={ getVisibility(currentWeather.visibility) } />
      <Data title='Clouds' data={{ value: currentWeather.clouds, unit: '%' }} />
    </div>
  )
}
