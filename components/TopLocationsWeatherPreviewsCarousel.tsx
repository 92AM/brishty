import React from 'react';
import { LocationCurrentWeather } from '../interfaces';
import { getWindow } from '../services/BrowserService';
import HomePageRegionHeader from './HomePageRegionHeader';
import { RightChevronSvg } from './SvgFactory';

type TopLocationsWeatherPreviewsCarouselProps = {
    items: LocationCurrentWeather[];
    mainLocation: string;
};

const onClickLoadViewMoreLocationPage = (location: string) => {
    getWindow().location.assign('/weather/' + location.toLowerCase() + 'weather');
};

const TopLocationsWeatherPreviewsCarousel = ({ items, mainLocation }: TopLocationsWeatherPreviewsCarouselProps) => {
    const topForecasts: any = [];
    items.forEach((locationWeather, index) => {
        const location = locationWeather.locationName + ', ' + locationWeather.countryCode;
        topForecasts.push(
            <div key={locationWeather.locationName + '_' + index} className="inline-block flex px-3 my-4 w-max h-48">
                <img
                    className="hidden lg:block h-full lg:h-46 lg:w-46 flex-none bg-cover rounded-l
                    lg:rounded-t-none lg:rounded-l-3xl text-center overflow-hidden
                    shadow-md"
                    src={locationWeather.imageLink}
                    title={location}
                    alt={location}
                    loading={'lazy'}
                />
                <div
                    className="flex-2 p-4 w-72 h-full max-w-xs overflow-hidden rounded-3xl lg:rounded-l-none
                    shadow-md bg-white"
                >
                    <div className="text-gray-800 font-bold text-xl mb-2">{locationWeather.locationName}</div>
                    <div className="flex space-x-4">
                        <img
                            className="h-24"
                            src={`https://openweathermap.org/img/wn/${locationWeather.weather.icon}@4x.png`}
                            alt={'weather icon'}
                            loading={'lazy'}
                        />
                        <div className="flex-1 float-right">
                            <p className="pt-1 text-2xl text-gray-700 text-base">{locationWeather.temperature}C</p>
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
                            <RightChevronSvg className={'flex-2 pt-1 float-right h-6 w-6'} viewBox={'0 0 24 24'} />
                        </a>
                    </div>
                </div>
            </div>,
        );
    });
    if (!(mainLocation === 'Americas' || mainLocation === 'Africa')) {
        topForecasts.push(
            <div
                className="inline-block px-3 my-4 cursor-pointer"
                onClick={() => onClickLoadViewMoreLocationPage(mainLocation)}
            >
                <div
                    className="flex p-4 w-64 h-full max-w-xs overflow-hidden rounded-3xl
                    shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    <div className="flex-1">
                        <span className="block pt-16 text-center text-3xl text-gray-800">View More</span>
                    </div>
                    <RightChevronSvg className={'flex-2 mt-14 float-right h-12 w-12'} viewBox={'0 0 24 24'} />
                </div>
            </div>,
        );
    }

    return (
        <>
            <HomePageRegionHeader item={mainLocation} />
            <div className="md:flex">
                <div className="flex overflow-x-scroll hide-scroll-bar h-full">
                    <div className="flex flex-nowrap py-2">{topForecasts}</div>
                </div>
            </div>
        </>
    );
};

export default TopLocationsWeatherPreviewsCarousel;
