import * as React from 'react';

import { WeatherDetails } from '../interfaces';
import BasicCurrentWeather from './BasicCurrentWeather';
import HourlyWeather from './HourlyWeather';

type BasicCurrentAndHourlyWeatherProps = {
    item: WeatherDetails;
};

const BasicCurrentAndHourlyWeather = ({ item: weatherDetails }: BasicCurrentAndHourlyWeatherProps) => {
    return (
        <div className="md:flex pt-1 pb-1">
            <BasicCurrentWeather item={weatherDetails} />
            <HourlyWeather item={weatherDetails.hourly} />
        </div>
    );
};

export default BasicCurrentAndHourlyWeather;
