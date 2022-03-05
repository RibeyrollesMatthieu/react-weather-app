import useSWR from "swr"
import { CurrentWeather } from "../components/CurrentWeather";
import { fetcher } from "../utils/fetcher"

interface Coords {
  lat: string | number;
  lon: string | number;
}

export const useCurrentWeather = (city: string | Coords) => {

  const { data, error } = useSWR(
    `/api/current-weather?${(typeof city === 'string') ? `city=${city}` : `lat=${city.lat}&lon=${city.lon}`}`, 
    fetcher
  );

  return {
    currentWeather: data as CurrentWeather,
    loading: !data && !error,
    error: error
  }
}