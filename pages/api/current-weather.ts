import { NextApiRequest, NextApiResponse } from "next";

const getCurrentWeather = async (req: NextApiRequest, res: NextApiResponse) => {

  console.log(req.query);
  

  let params: string;

  if (req.query.city) {
    params = `q=${req.query.city}`;
  } else {
    params = `lat=${req.query.lat}&lon=${req.query.lon}`;
  }

  await fetch(`${process.env.WEATHER_API_ENDPOINT}/weather?${params}&appid=${process.env.WEATHER_API_KEY}`)
    .then(result => result.json())
    .then(json => res.status(200).json(json))
    .catch(error => res.status(405).json({ error: error.message }));
}

export default getCurrentWeather;