import useSWR from "swr"
import { useAppDispatch } from "../redux/app/hooks";
import { seCity, setCoords } from "../redux/features/citySlice";
import { fetcher } from "../utils/fetcher"

/**
 * @typedef {Object} UseCurrentWeatherReturnType
 * @property {CurrentWeather} currentWeather  - the current weather in the city.
 * @property {boolean}        loading         - returns the state of the fetching.
 * @property {*}              error           - the error, if there is one.
 */

/**
 * Hook used to fetch current weather data and 
 * @param {(string | Coords)} city - the city (or its coords) to fetch data for.
 * @returns {UseCurrentWeatherReturnType} An object containing the data, the state of the fetching and the potential error.
 */
export const useCurrentWeather = (city: string | CityCoords): { currentWeather: CurrentWeather, loading: boolean, error: any } => {

  const { data, error } = useSWR(
    `/api/current-weather?${
        (typeof city === 'string') 
      ? `city=${city}` 
      : `lat=${city.lat}&lon=${city.lon}`}
    `, 
    fetcher
  ) as { data: CurrentWeather, error: any };

  const dispatch = useAppDispatch();

  if (data) dispatch(seCity({ ...data.city }));

  return {
    currentWeather: data,
    loading: !data && !error,
    error: error
  }
}