import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather';

/**
 * The element displaying the current weather data.
 * Fetches data and renders depending of it.  
 * Displayed fields: current temp / feels like temp
 */
export const CurrentWeather = () => {
  const { currentWeather, loading, error } = useCurrentWeather('albi');

  if (loading) return <>Loading..</> 
  if (error) return <>An error has occured.</>

  return (
    <div>
      Current temperature: {currentWeather.main.temp }
      Feels like: { currentWeather.main.feels_like }
    </div>
  )
}
