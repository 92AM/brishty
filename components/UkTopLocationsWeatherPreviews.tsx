import React from 'react'
import {LocationCurrentWeather} from "../interfaces";

type UkTopLocationsWeatherPreviewsProps = {
    items: LocationCurrentWeather[]
}

const UkTopLocationsWeatherPreviews = ({items: locationsWeathers}: UkTopLocationsWeatherPreviewsProps) => {
    const topUkForecasts: any = [];
    locationsWeathers.forEach((locationWeather) => {
        topUkForecasts.push(
            <div className="w-full lg:max-w-full lg:flex shadow-lg">
                <img
                    className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    src={"/images/" + locationWeather.locationName.toLowerCase() + ".jpg"} title="London">
                </img>
                <div
                    className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="text-gray-800 font-bold text-xl mb-2">{locationWeather.locationName}</div>
                    <div className="flex space-x-4">
                        <img
                            className="h-24"
                            src={` https://openweathermap.org/img/wn/${locationWeather.weather.icon}@4x.png`}
                            alt={"weather icon"}
                        />
                        <div className="flex-1 float-right">
                            <p className="pt-1 text-2xl text-gray-700 text-base">{locationWeather.temperature}C</p>
                            <p className="text-gray-700 text-sm">Feels like : {locationWeather.feelsLike}C</p>
                            <p className="text-gray-700 text-sm">{locationWeather.weather.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a className="flex space-x-4" href={"/weather/" + locationWeather.locationName + ", UK"}>
                            <p className="text-gray-800 text-lg hover:underline">View Weather </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 flex-1 float-right h-6 w-6"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div
            className="p-10 grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-3 gap-5">
            {topUkForecasts}
        </div>
    );
};

export default UkTopLocationsWeatherPreviews

