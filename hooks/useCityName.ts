import { useEffect, useState } from "react";
import { useFetcher } from "./useFetcher";

interface Data {
  country?: string;
  lat?: number;
  local_names?: {};
  lon?: number;
  name?: string;
  state?: string;
}

export const useCityName = (coords: CityCoords): { name: string; coords: CityCoords; loading: boolean; error: any } => {

  const { lat, lon } = coords;
  const { data, loading, error } = useFetcher(`/api/get-city?lat=${lat}&lon=${lon}`);
  const [ name, setName ] = useState<string>('');

  useEffect(() => {
    if (data) setName((data as Data[])[0].name as string);
  }, [data]);

  return {
    name,
    coords: coords,
    loading: loading,
    error: error
  }
}