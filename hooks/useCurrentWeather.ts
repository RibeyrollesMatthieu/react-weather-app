import useSWR from "swr"
import { fetcher } from "../utils/fetcher"

interface I_coords {
  lat: string | number;
  lon: string | number;
}

type T_params = string | I_coords;

export const useCurrentWeather = (city: T_params) => {

  const { data, error } = useSWR(
    `/api/current-weather?${(typeof city === 'string') ? `city=${city}` : `lat=${city.lat}&lon=${city.lon}`}`, 
    fetcher
  );

  return {
    data: data,
    loading: !data && !error,
    error: error
  }
}