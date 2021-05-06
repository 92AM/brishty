import * as React from 'react'

import {WeatherDetails} from '../interfaces'
import moment from "moment";

type ListDetailProps = {
    item: WeatherDetails
}

const ListWeatherDetail = ({item: weatherDetails}: ListDetailProps) => {

    const slideComponents: any = [];

    weatherDetails.hourly.forEach((hour, index) => {

        const time = index === 0
            ? 'Now'
            : moment.unix(Number(hour.dateTime)).format('HH');

        slideComponents.push(
            <div className="inline-block px-3">
                <div
                    className="w-44 h-44 md:w-64 md:h-64 max-w-xs
                    overflow-hidden rounded-lg shadow-md bg-white
                    hover:shadow-xl transition-shadow
                    duration-300 ease-in-out"
                >
                    <h1 className="text-xl md:text-2xl pt-5 md:pt-10 text-center">{time}</h1>
                    <img
                        className="object-contain object-center w-full h-20 md:h-28"
                        src={` https://openweathermap.org/img/wn/${hour.weather.icon}@4x.png`}
                        alt={hour.weather.description}
                    />
                    <h1 className="text-xl md:text-2xl pb-5 md:pb-10 text-center">{`${hour.temp}C`}</h1>
                </div>
            </div>
        );
    });

    return (
        <div className="md:flex space-x-4">
            <div className="flex-1 pt-20 pb-8 md:p-8 max-w-sx text-gray-800 container mx-auto">
                <h1 className="text-5xl p-1 text-center">{weatherDetails.locationName}</h1>
                <h2 className="text-xl text-center capitalize p-1">
                    {weatherDetails.current.weather.description}
                </h2>
                <h1 className="text-8xl p-1 text-center">{weatherDetails.current.currentTemp}</h1>
                <h2 className="text-xl text-center">
                    High : {weatherDetails.current.maxTemp}
                </h2>
                <h2 className="text-xl text-center">
                    Low : {weatherDetails.current.minTemp}
                </h2>
            </div>
            <div className="flex overflow-x-scroll pt-10 pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    {slideComponents}
                </div>
            </div>
        </div>
    );
}

export default ListWeatherDetail

