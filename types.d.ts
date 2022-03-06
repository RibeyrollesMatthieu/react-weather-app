interface City {
  name: string;
  coords?: CityCoords
}
interface CurrentWeather {
  weather: {
    main: string;
    description: string;
  };
  main: {
    temp: number;
    feels_like: number;
  };
  city: City
}

interface CityCoords {
  lat: string | number;
  lon: string | number;
}