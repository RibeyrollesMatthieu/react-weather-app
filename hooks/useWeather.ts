import useSWR from "swr"
import { fetcher } from "../utils/fetcher"

export const useWeather = (city: CityCoords): { weather: any, loading: boolean, error: any } => {

  const { data, error } = useSWR(`/api/weather?lat=${city.lat}&lon=${city.lon}`, fetcher);

  if (data) console.log(data);
  
  return {
    weather: data as { 
      alerts: [],
      current: {},
      daily: [],
      hourly: []
    },
    loading: !data && !error,
    error: error
  }
}