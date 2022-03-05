import { NextApiRequest, NextApiResponse } from "next";

const getCurrentWeather = async (req: NextApiRequest, res: NextApiResponse) => {
  const { lat, lon } = req.query;

  await fetch(`${process.env.WEATHER_API_ENDPOINT}/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`)
    .then(result => result.json())
    .then(json => res.status(200).json(json))
    .catch(error => res.status(405).json({ error: error.message }));
}

export default getCurrentWeather;