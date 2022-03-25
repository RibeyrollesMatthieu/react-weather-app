interface City {
  name: string;
  state?: string;
  country?: string;
  coords?: CityCoords
}
interface CurrentWeather {
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  visibility: number;
  clouds: number;
  city: City;
}

interface CityCoords {
  lat: string | number;
  lon: string | number;
}