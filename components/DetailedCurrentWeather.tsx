import React from 'react';
import WeatherDescriptionItem from './WeatherDescriptionItem';
import { WeatherDetails } from '../interfaces';
import moment from 'moment';
import { windDegreeToText } from '../services/GenericUtilityService';

type DetailedCurrentWeatherProps = {
    item: WeatherDetails;
};

const DetailedCurrentWeather = ({ item: weatherDetails }: DetailedCurrentWeatherProps) => {
    return (
        <div className="bg-gray-800 text-white text-2l text-center p-8">
            <div
                className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8
                divide-y divide-gray-500 lg:divide-y-0"
            >
                <div className="lg:grid lg:grid-cols-5 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                    <WeatherDescriptionItem
                        description={'SUNRISE'}
                        value={moment.unix(Number(weatherDetails.current.sunrise)).format('HH:MM')}
                    />
                    <WeatherDescriptionItem
                        description={'SUNSET'}
                        value={moment.unix(Number(weatherDetails.current.sunset)).format('HH:MM')}
                    />
                    <WeatherDescriptionItem
                        description={'CHANCE OF RAIN'}
                        value={`${Math.round(Number(weatherDetails.hourly[0].probabilityOfPrecipitation) * 100)}%`}
                    />
                    <WeatherDescriptionItem description={'HUMIDITY'} value={`${weatherDetails.current.humidity}%`} />
                    <WeatherDescriptionItem
                        description={'WIND'}
                        value={`${windDegreeToText(Number(weatherDetails.current.windDegree))} ${Math.round(
                            Number(weatherDetails.current.windSpeed),
                        )} km/hr`}
                    />
                </div>

                <div className="lg:grid lg:grid-cols-5 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                    <WeatherDescriptionItem description={'FEELS LIKE'} value={`${weatherDetails.current.feelsLike}C`} />
                    <WeatherDescriptionItem
                        description={'CLOUDINESS'}
                        value={`${weatherDetails.current.cloudiness}%`}
                    />
                    <WeatherDescriptionItem description={'PRESSURE'} value={`${weatherDetails.current.pressure} hPa`} />
                    <WeatherDescriptionItem
                        description={'VISIBILITY'}
                        value={`${Number(weatherDetails.current.visibility) / 100} km`}
                    />
                    <WeatherDescriptionItem description={'UV INDEX'} value={weatherDetails.current.uvIndex} />
                </div>
            </div>
        </div>
    );
};

export default DetailedCurrentWeather;
