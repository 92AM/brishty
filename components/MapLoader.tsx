import React from "react";
import dynamic from "next/dynamic";
import {WeatherDetailsProps} from "../interfaces";
import {WEATHER_MAP_HEIGHT, WEATHER_MAP_WIDTH} from "../utility/constants";

const MapPlaceholder = () => {
    return (
        <div style={{height: WEATHER_MAP_HEIGHT, width: WEATHER_MAP_WIDTH}}
             className="bg-gray-200"
        />
    );
}

export const MapLoader = ({weatherDetails}: WeatherDetailsProps) => {
    const MapComponent = React.useMemo(() => dynamic(
        () => import('./WeatherMap'),
        {
            loading: () => <MapPlaceholder/>,
            ssr: false
        }
    ), [])
    return <MapComponent weatherDetails={weatherDetails}/>
}