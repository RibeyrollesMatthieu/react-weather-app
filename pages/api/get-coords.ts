import { NextApiRequest, NextApiResponse } from "next";

const getCoordsFromName = async (req: NextApiRequest, res: NextApiResponse) => {

  const { city, state, country } = req.query; 

  let q: string = '';
  if (city && city !== '') q += city;
  if (state && state !== '' ) q += ',' + state;
  if (country && country != '') q += ',' + country;
  

  await fetch(`${process.env.GEOCODING_API_ENDPOINT}/direct?q=${q}&limit=1&appid=${process.env.WEATHER_API_KEY}`)
    .then(result => result.json())
    .then(json => res.status(200).json(json))
    .catch(error => res.json({ error: error.message }));
}

export default getCoordsFromName;