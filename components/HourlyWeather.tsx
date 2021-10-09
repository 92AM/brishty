import React, { useState } from 'react';
import { Hour } from '../interfaces';
import moment from 'moment';

type HourlyWeatherProps = {
    item: Hour[];
};

const HourlyWeather = ({ item: hourly }: HourlyWeatherProps) => {
    const [showModal, setShowModal] = useState(false);
    const [hourToRenderOnModal, setHourToRenderOnModal] = useState<Hour | undefined>(undefined);
    const [displayableTime, setDisplayableTime] = useState<string | undefined>(undefined);

    const onClickDisplayModal: (hour: Hour, time: string) => void = (hour: Hour, time: string) => {
        console.log('weather ===> ', hour);
        setShowModal(true);
        setHourToRenderOnModal(hour);
        setDisplayableTime(time);
    };

    const slideComponents: any = [];

    hourly.forEach((hour, index) => {
        const time = index === 0 ? 'Now' : moment.unix(Number(hour.dateTime)).format('HH:') + '00';

        if (index <= 11) {
            slideComponents.push(
                <button className="inline-block px-3" onClick={() => onClickDisplayModal(hour, time)}>
                    <div
                        className="w-32 h-44 md:w-44 md:h-64 max-w-xs
                    overflow-hidden rounded-3xl shadow-md bg-white
                    hover:shadow-xl transition-shadow
                    duration-300 ease-in-out"
                    >
                        <h1 className="text-xl md:text-2xl pt-5 md:pt-10 text-center">{time}</h1>
                        <img
                            className="object-contain object-center w-full h-20 md:h-28"
                            src={` https://openweathermap.org/img/wn/${hour.weather.icon}@4x.png`}
                            alt={hour.weather.description}
                            loading={'lazy'}
                        />
                        <h1 className="text-xl md:text-2xl pb-5 md:pb-10 text-center">{`${hour.temperature}C`}</h1>
                    </div>
                </button>,
            );
        }
    });

    const HourlyWeatherModal = () => {
        if (showModal) {
            return (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <span className="text-xl font-semibold pr-4">
                                        {displayableTime === 'Now'
                                            ? 'Weather ' + displayableTime.toLowerCase()
                                            : 'Weather at ' + displayableTime}
                                    </span>
                                    <button
                                        className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-gray-900 h-6 w-6 text-2xl block">X</span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-900 text-lg leading-relaxed">
                                        Expect{' '}
                                        <span className="font-semibold">
                                            {hourToRenderOnModal?.weather.description}
                                        </span>{' '}
                                        {displayableTime === 'Now'
                                            ? 'right ' + displayableTime.toLowerCase()
                                            : ' at ' + displayableTime}
                                        ; with{' '}
                                        <span className="font-semibold">{`${Math.round(
                                            Number(hourToRenderOnModal?.probabilityOfPrecipitation) * 100,
                                        )}%`}</span>{' '}
                                        chance of rain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-gray-900" />
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <div
            className="flex overflow-x-scroll pt-10 pb-10 hide-scroll-bar
            md:ml-5 md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-5xl"
        >
            <div className="flex flex-nowrap ">{slideComponents}</div>
            <HourlyWeatherModal />
        </div>
    );
};

export default HourlyWeather;
