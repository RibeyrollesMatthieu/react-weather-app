import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather';
import { useAppSelector } from '../redux/app/hooks';

/**
 * The element displaying the current weather data.
 * Fetches data and renders depending of it.  
 * Displayed fields: current temp / feels like temp
 */
export const CurrentWeather = () => {
  const city = useAppSelector(state => (state.city.coords?.lat && state.city.coords?.lon) ? state.city.coords : state.city.name);
  const measureUnit = useAppSelector(state => state.preferences.measure_unit);
  const { currentWeather, loading, error } = useCurrentWeather(city, measureUnit);
  
  if (error) return <>An error has occured.</>

  return (
    <div>
      Current temperature: {loading && <>Loading..</>} {currentWeather && currentWeather.main.temp + measureUnit} <br />
      Feels like: {loading && <>Loading..</>} {currentWeather && currentWeather.main.feels_like + measureUnit}
    </div>
  )
}
