import React from 'react'
import {Hour} from "../interfaces";
import moment from "moment";

type HourlyWeatherProps = {
    item: Hour[]
}

const HourlyWeather = ({item: hourly}: HourlyWeatherProps) => {

    const slideComponents: any = [];

    hourly.forEach((hour, index) => {

        const time = index === 0
            ? 'Now'
            : moment.unix(Number(hour.dateTime)).format('HH:') + "00";

        slideComponents.push(
            <div className="inline-block px-3">
                <div
                    className="w-44 h-44 md:w-64 md:h-64 max-w-xs
                    overflow-hidden rounded-3xl shadow-md bg-white
                    hover:shadow-xl transition-shadow
                    duration-300 ease-in-out"
                >
                    <h1 className="text-xl md:text-2xl pt-5 md:pt-10 text-center">{time}</h1>
                    <img
                        className="object-contain object-center w-full h-20 md:h-28"
                        src={` https://openweathermap.org/img/wn/${hour.weather.icon}@4x.png`}
                        alt={hour.weather.description}
                        loading={"lazy"}
                    />
                    <h1 className="text-xl md:text-2xl pb-5 md:pb-10 text-center">{`${hour.temperature}C`}</h1>
                </div>
            </div>
        );
    });

    return (
        <div
            className="flex overflow-x-scroll pt-10 pb-10 hide-scroll-bar
            md:ml-5 md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-5xl"
        >
            <div className="flex flex-nowrap ">
                {slideComponents}
            </div>
        </div>
    );
};

export default HourlyWeather

