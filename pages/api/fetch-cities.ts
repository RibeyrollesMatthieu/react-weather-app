import { NextApiRequest, NextApiResponse } from "next";

const fetchCities = async (req: NextApiRequest, res: NextApiResponse) => {

  const { input } = req.query; 

  await fetch(`${process.env.GOOGLE_PLACES_API_ENDPOINT}/json?input=${input}&types=%28cities%29&limit=5&key=${process.env.GOOGLE_PLACES_API_KEY}`)
    .then(result => result.json())
    .then(json => res.status(200).json(json))
    .catch(error => res.json({ error: error.message }));
}

export default fetchCities;