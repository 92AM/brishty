import * as React from 'react';

import { WeatherDetails } from '../interfaces';
import BasicCurrentWeather from './BasicCurrentWeather';
import HourlyWeather from './HourlyWeather';

type Props = {
  item: WeatherDetails;
};

const BasicCurrentlyAndHourlyWeather = ({ item: weatherDetails }: Props) => {
  return (
    <div className="md:flex">
      <BasicCurrentWeather item={weatherDetails} />
      <HourlyWeather item={weatherDetails.hourly} />
    </div>
  );
};

export default BasicCurrentlyAndHourlyWeather;
