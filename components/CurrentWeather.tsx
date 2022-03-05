import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather';

export const CurrentWeather = () => {
  const { currentWeather, loading, error } = useCurrentWeather('albi');

  if (loading) return <>Laoding..</> 
  if (error) return <>An error has occured.</>

  return (
    <div>
      Current temperature: {currentWeather.main.temp }
      Feels like: { currentWeather.main.feels_like }
    </div>
  )
}
