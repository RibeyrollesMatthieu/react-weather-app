import { NextApiRequest, NextApiResponse } from "next";

const getWeather = async (req: NextApiRequest, res: NextApiResponse) => {

  const { lat, lon } = req.query;

  await fetch (`https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&units=metric&exclude=minutely&appid=${process.env.WEATHER_API_KEY}`)
    .then(result => result.json())
    .then(json => res.status(200).json(json))
    .catch(error => res.json({ error: error.message }));
} 

export default getWeather;