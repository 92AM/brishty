import React from 'react';
import { LocationCurrentWeather } from '../interfaces';
import { RightChevronSvg } from './SvgFactory';

type TopLocationsWeatherPreviewsProps = {
    items: LocationCurrentWeather[];
};

const TopLocationsWeatherPreviews = ({ items: locationsWeathers }: TopLocationsWeatherPreviewsProps) => {
    return (
        <div
            className="p-6 grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-3 gap-5"
        >
            {locationsWeathers.map((locationWeather, index) => {
                const location = locationWeather.locationName + ', ' + locationWeather.countryCode;
                return (
                    <div className="w-full lg:max-w-full lg:flex shadow-lg" key={index}>
                        <img
                            className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t
                    lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            src={locationWeather.imageLink}
                            title={location}
                            alt={location}
                        />
                        <div
                            className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r
                    px-4 pt-4 pb-2 flex flex-col justify-between leading-normal"
                        >
                            <div className="text-gray-800 font-bold text-xl mb-2">{locationWeather.locationName}</div>
                            <div className="flex space-x-4">
                                <img
                                    className="h-24"
                                    src={`https://openweathermap.org/img/wn/${locationWeather.weather.icon}@4x.png`}
                                    alt={'weather icon'}
                                />
                                <div className="flex-1 float-right">
                                    <p className="pt-1 text-2xl text-gray-700 text-base">
                                        {locationWeather.temperature}C
                                    </p>
                                    <p className="text-gray-700 text-sm font-medium">
                                        Feels like : {locationWeather.feelsLike}C
                                    </p>
                                    <p className="text-gray-700 text-sm capitalize font-medium">
                                        {locationWeather.weather.description}
                                    </p>
                                </div>
                            </div>
                            <div className="items-center">
                                <a className="flex space-x-4" href={'/weather/' + location}>
                                    <p className="flex-1 text-gray-800 text-lg hover:underline">View Weather</p>
                                    <RightChevronSvg
                                        className={'flex-2 pt-1 float-right h-6 w-6'}
                                        viewBox={'0 0 24 24'}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TopLocationsWeatherPreviews;
