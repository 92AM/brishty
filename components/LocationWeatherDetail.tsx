import * as React from 'react'

import {WeatherDetails} from '../interfaces'
import BasicCurrentWeather from "./BasicCurrentWeather";
import HourlyWeather from "./HourlyWeather";

type ListDetailProps = {
    item: WeatherDetails
}

const LocationWeatherDetail = ({item: weatherDetails}: ListDetailProps) => {

    return (
        <div className="md:flex">
            <BasicCurrentWeather item={weatherDetails}/>
            <HourlyWeather item={weatherDetails.hourly}/>
        </div>
    );
}

export default LocationWeatherDetail

