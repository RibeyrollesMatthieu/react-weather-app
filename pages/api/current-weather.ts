import { NextApiRequest, NextApiResponse } from "next";

/**
 * Cast the fetching jsoned result to an object of CurrentWeather type
 * @param   {any}             json  the jsoned object to cast 
 * @param   {any}             json  the jsoned object to cast 
 * @returns {CurrentWeather}        the {@link CurrentWeather} object 
 */
const castResultToCurrentWeather = (json: any) : CurrentWeather => {
  return {
    weather: {
      main: json.weather[0].main,
      description: json.weather[0].description
    },
    main: {
      temp: json.main.temp,
      feels_like: json.main.feels_like
    },
    city: {
      name: json.name,
      coords: { ...json.coord }
    }
  }
}

/**
 * Fetch the current weather data.
 * @param {NextApiRequest}  req - the http request.
 * @param {NextApiResponse} res - the http response.
 */
const getCurrentWeather = async (req: NextApiRequest, res: NextApiResponse<CurrentWeather>) => {
  let params: string;

  /* changes the query depending if we're trying to fetch data with a city or with lat and lon */
  if (req.query.city) params = `q=${req.query.city}`;
  else                params = `lat=${req.query.lat}&lon=${req.query.lon}`;

  await fetch(`${process.env.WEATHER_API_ENDPOINT}/weather?${params}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
    .then(result => result.json())
    .then(json => res.status(200).json(castResultToCurrentWeather(json)))
    .catch(error => res.status(405).end());
}

export default getCurrentWeather;