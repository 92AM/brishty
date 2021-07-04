import React from 'react'
import {WeatherDetails} from "../interfaces";

type Props = {
    item: WeatherDetails
}

const TodaysWeatherDescription = ({item: weatherDetails}: Props) => {
    return (
        <div className="2xl:px-32">
            <div className="text-gray-800 text-2xl text-left p-2">
                Today's weather forecast :
            </div>
            <div className="text-gray-800 text-lg text-left p-2">
                Expect {weatherDetails.current.weather.description} today, currently{' '}
                the temperature in {weatherDetails.locationName} is {weatherDetails.current.currentTemp}C. The high will be{' '}
                {weatherDetails.current.maxTemp}C and the low tonight will be{' '}
                {weatherDetails.current.minTemp}C. Check out today's detailed weather and 7 days weather breakdown below.
            </div>
        </div>


    );
};

export default TodaysWeatherDescription

