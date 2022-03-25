import { useEffect, useState } from "react";
import { useFetcher } from "./useFetcher";

export const useSearchCities = (input: string): { suggestions: string[], error: any } => {

  const { data, loading, error } = useFetcher(`/api/fetch-cities?input=${input}`);
  const [ cities, setCities ] = useState<[]>([]);

  useEffect(() => {
    if (input.length < 3) setCities([]);
    else setCities(data?.predictions.map((prediction: any) => prediction?.description) || []);
  }, [data, input]);

  return {
    suggestions: cities,
    error
  }

}