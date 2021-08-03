import React from 'react';
import { WeatherDetails } from '../interfaces';

type WeatherDetailsProps = {
  item: WeatherDetails;
};

const BasicCurrentWeather = ({ item: weatherDetails }: WeatherDetailsProps) => {
  return (
    <div className="flex-1 pt-20 md:pt-10 pb-8 max-w-md text-gray-800 container mx-auto">
      <h1 className="text-5xl pb-2 truncate text-center mx-auto">
        {weatherDetails.locationName}
      </h1>
      <h2 className="text-xl text-center capitalize p-1">
        {weatherDetails.current.weather.description}
      </h2>
      <h1 className="text-8xl p-1 text-center">
        {weatherDetails.current.currentTemp}
      </h1>
      <h2 className="text-xl text-center">
        High : {weatherDetails.current.maxTemp}C
      </h2>
      <h2 className="text-xl text-center">
        Low : {weatherDetails.current.minTemp}C
      </h2>
    </div>
  );
};

export default BasicCurrentWeather;
