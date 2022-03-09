import { NextApiRequest, NextApiResponse } from "next";
import { MeasureUnit } from "../../redux/features/preferencesSlice";

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
      feels_like: json.main.feels_like,
      humidity: json.main.humidity
    },
    visibility: json.visibility,
    city: {
      name: json.name,
      coords: { ...json.coord }
    },
    clouds: json.clouds.all
  }
}

/**
 * Fetch the current weather data.
 * @param {NextApiRequest}  req - the http request.
 * @param {NextApiResponse} res - the http response.
 */
const getCurrentWeather = async (req: NextApiRequest, res: NextApiResponse<CurrentWeather>) => {
  let params: string = '';

  /* changes the query depending if we're trying to fetch data with a city or with lat and lon */
  if (req.query.city) params = `q=${req.query.city}`.trim();
  else                params = `lat=${req.query.lat}&lon=${req.query.lon}`.trim();

  await fetch(`${process.env.WEATHER_API_ENDPOINT}/weather?${params}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
    .then(result => result.json())
    .then(json => res.status(200).json(castResultToCurrentWeather(json)))
    .catch(error => res.status(405).end());
}

export default getCurrentWeather;