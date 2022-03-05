interface CurrentWeather {
  weather: {
    main: string;
    description: string;
  };
  main: {
    temp: number;
    feels_like: number;
  }
}