import React from "react";
import dynamic from "next/dynamic";
import {MapProps, WeatherDetails} from "../interfaces";
import {WEATHER_DETAILS_PAGE_MAP_HEIGHT, WEATHER_DETAILS_PAGE_MAP_WIDTH} from "../utility/constants";

type Props = {
    weatherDetails?: WeatherDetails
    mapProps: MapProps
}

const MapPlaceholder = () => {
    return (
        <div style={{height: WEATHER_DETAILS_PAGE_MAP_HEIGHT, width: WEATHER_DETAILS_PAGE_MAP_WIDTH}}
             className="bg-gray-200"
        />
    );
}

export const MapLoader = ({weatherDetails: weatherDetails, mapProps: mapProps}: Props) => {
    const MapComponent = React.useMemo(() => dynamic(
        () => import('./WeatherMap'),
        {
            loading: () => <MapPlaceholder/>,
            ssr: false
        }
    ), [])
    return <MapComponent weatherDetails={weatherDetails!} mapProps={mapProps} />
}