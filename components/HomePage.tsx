import React from 'react'
import { useCurrentWeather } from '../hooks/useCurrentWeather'

export const HomePage = () => {
  const { data, loading, error } = useCurrentWeather({ lat: 43.9278, lon: 2.1479 });

  if (loading) return <>Loading...</>
  if (error) return <>{error}</>

  console.log('data', data);
  

  return (
    <div>
      Temperature: { data.main.temp }
    </div>
  )
}
