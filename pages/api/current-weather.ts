import { NextApiRequest, NextApiResponse } from "next";

const getCurrentWeather = async (req: NextApiRequest, res: NextApiResponse<CurrentWeather>) => {
  let params: string;

  if (req.query.city) {
    params = `q=${req.query.city}`;
  } else {
    params = `lat=${req.query.lat}&lon=${req.query.lon}`;
  }

  await fetch(`${process.env.WEATHER_API_ENDPOINT}/weather?${params}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
    .then(result => result.json())
    .then(json => {
      res.status(200).json({
        weather: {
          main: json.weather[0].main,
          description: json.weather[0].description
        },
        main: {
          temp: json.main.temp,
          feels_like: json.main.feels_like
        }
      })
    })
    .catch(error => res.status(405).end());
}

export default getCurrentWeather;