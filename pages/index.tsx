import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../components/HomePage'
import { useCurrentWeather } from '../hooks/useCurrentWeather'
import { useAppSelector } from '../redux/app/hooks'
import { getTemp } from '../utils/temp'

const Home: NextPage = () => {
  const city = useAppSelector(state => state.city.name);
  const units = useAppSelector(state => state.preferences.measure_unit);
  const { currentWeather } = useCurrentWeather(city);

  return (
    <>
      <Head>
        <title>{(currentWeather && `${getTemp(currentWeather?.main.temp, units)}${units} in ${city}`) || 'Weather App'}</title>
      </Head>

      <HomePage />
    </>
  )
}

export default Home
