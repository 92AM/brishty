import React from "react";
import {Daily} from "../interfaces";
import moment from "moment";
import {windDegreeToText} from "../services/GenericUtilityService";

type DailyWeatherProps = {
    item: Daily[]
}

const SevenDayWeather = ({item: daily}: DailyWeatherProps) => {

    const slideComponents: any = [];

    daily.forEach((eachDay) => {

        slideComponents.push(
            <div className="inline-block px-3 my-4">
                <div
                    className="w-96 h-full max-w-xs overflow-hidden rounded-lg
                    shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    <div className="p-4">
                        <img
                            className="object-contain object-center w-full h-24"
                            src={`https://openweathermap.org/img/wn/${eachDay.weather.icon}@4x.png`}
                            alt={eachDay.weather.description}
                        />
                        <h2 className="text-center text-xl text-gray-900 font-medium title-font mb-4">
                            {moment.unix(Number(eachDay.dateTime)).format('dddd')}
                        </h2>

                        <div className="grid gap-4 grid-cols-2">
                            <div className="divide-y space-y-2">
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Chance of rain</p>
                                    <p className="text-center">
                                        <b>{Math.round(Number(eachDay.probabilityOfPrecipitation) * 100)}%</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Humidity</p>
                                    <p className="text-center"><b>{eachDay.humidity}%</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">High</p>
                                    <p className="text-center"><b>{eachDay.temperature.max}C</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Low</p>
                                    <p className="text-center"><b>{eachDay.temperature.min}C</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Wind speed</p>
                                    <p className="text-center"><b>
                                        {`${windDegreeToText(Number(eachDay.windDegree))} ${Math.round(
                                            Number(eachDay.windSpeed)
                                        )} km/hr`}
                                    </b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">UV index</p>
                                    <p className="text-center"><b>{eachDay.uvIndex}</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Pressure</p>
                                    <p className="text-center"><b>{eachDay.pressure} hPa</b></p>
                                </div>
                            </div>
                            <div className="divide-y space-y-2">
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Sunrise</p>
                                    <p className="text-center">
                                        <b>{moment.unix(Number(eachDay.sunrise)).format('HH:MM')}</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Sunset</p>
                                    <p className="text-center">
                                        <b>{moment.unix(Number(eachDay.sunset)).format('HH:MM')}</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Cloudiness</p>
                                    <p className="text-center"><b>{eachDay.cloudiness}%</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Feels like (morn)</p>
                                    <p className="text-center"><b>{eachDay.feelsLike.morning}C</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Feels like (day)</p>
                                    <p className="text-center"><b>{eachDay.feelsLike.day}C</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Feels like (eve)</p>
                                    <p className="text-center"><b>{eachDay.feelsLike.evening}C</b></p>
                                </div>
                                <div>
                                    <p className="text-center leading-relaxed text-base pt-1">Feels like (night)</p>
                                    <p className="text-center"><b>{eachDay.feelsLike.night}C</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="md:flex">
            <div className="flex overflow-x-scroll hide-scroll-bar h-full">
                <div className="flex flex-nowrap py-2">
                    {slideComponents}
                </div>
            </div>
        </div>
    );
}

export default SevenDayWeather