import { useEffect, useState } from "react"

export const useFetcher = (url: string): { data: any, loading: boolean, error: any } => {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(json => setData(json))
      .catch(error => setError(error))
  }, [url]);

  return {
    data: data,
    loading: !data && !error,
    error: error
  }
}