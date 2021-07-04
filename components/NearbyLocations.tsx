import React from 'react'
import {NearbyLocation} from "../interfaces";
import {searchWeatherByLocation} from "../services/SearchService";

type Props = {
    items: NearbyLocation[]
}

const onClickLoadNearbyLocationWeather = (location: string) => {
    searchWeatherByLocation(location);
};

const NearbyLocations = ({items: nearbyLocations}: Props) => {

    const slideComponents: any = [];

    slideComponents.push(
        <span className="p-4 text-center text-2xl text-gray-100 whitespace-nowrap">
            Nearby forecasts :
        </span>
    );

    nearbyLocations.forEach((eachNearbyLocation) => {
        slideComponents.push(
            <button
                className="whitespace-nowrap w-auto px-6 shadow-md no-underline rounded-full bg-gray-200 text-gray-800 font-sans font-semibold text-sm border-blue btn-primary hover:text-black hover:bg-gray-400 focus:outline-none active:shadow-none"
                onClick={() => onClickLoadNearbyLocationWeather(eachNearbyLocation.name + ", " + eachNearbyLocation.countryCode)}
            >
                <p className="text-base">{eachNearbyLocation.name}</p>
                <p className="text-xs">{eachNearbyLocation.distance} miles away</p>
            </button>
        );
    });

    return (
        <div className="bg-gray-800 border-b border-gray-100 p-2">
            <div className="max-w-xl mx-auto max-w-screen-xl">
                <div className="flex overflow-x-scroll p-4 hide-scroll-bar ">
                    <div className="flex flex-nowrap space-x-6">
                        {slideComponents}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NearbyLocations

