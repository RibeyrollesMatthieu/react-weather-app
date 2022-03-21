import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../components/HomePage'
import { useWeather } from '../hooks/useWeather'
import { useAppSelector } from '../redux/app/hooks'
import { getTemp } from '../utils/temp'

const Home: NextPage = () => {
  const city = useAppSelector(state => state.city);
  const units = useAppSelector(state => state.preferences.measure_unit);
  const { weather } = useWeather(city?.coords as CityCoords);

  return (
    <>
      <Head>
        <title>{(weather && `${getTemp(weather?.current.temp, units)}${units} in ${city?.name}`) || 'Weather App'}</title>
      </Head>

      <HomePage />
    </>
  )
}

export default Home
