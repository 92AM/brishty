import React from 'react'
import {WeatherDetailsProps} from "../interfaces";
import Layout from "./Layout";
import PageContentWrapper from "./PageContentWrapper";
import BasicCurrentlyAndHourlyWeather from "./BasicCurrentlyAndHourlyWeather";
import NearbyLocations from "./NearbyLocations";
import TodaysWeatherDescription from "./TodaysWeatherDescription";
import DetailedCurrentWeather from "./DetailedCurrentWeather";
import SevenDayWeather from "./SevenDayWeather";
import {MapLoader} from "./MapLoader";
import {getWeatherDetailsPageStaticMapProps} from "../services/WeatherDetailsService";

const WeatherLocationDetails = ({weatherDetails}: WeatherDetailsProps) => {

    return (
        <Layout
            title={`Brishty - ${
                weatherDetails && weatherDetails.locationName
            } weather`}
        >
            <PageContentWrapper>
                {weatherDetails && <BasicCurrentlyAndHourlyWeather item={weatherDetails}/>}
            </PageContentWrapper>
            {
                weatherDetails.latitude && weatherDetails.longitude &&
                <MapLoader weatherDetails={weatherDetails} mapProps={getWeatherDetailsPageStaticMapProps()}/>
            }
            {
                (weatherDetails?.nearbyLocations && weatherDetails?.nearbyLocations.length != 0)
                    ? <NearbyLocations items={weatherDetails?.nearbyLocations!}/>
                    : <div className="bg-gray-800 border-b border-gray-100 p-1"/>
            }
            <PageContentWrapper classNameCustomAttributes={"py-8 px-2"}>
                {weatherDetails && <TodaysWeatherDescription item={weatherDetails}/>}
            </PageContentWrapper>
            {weatherDetails && <DetailedCurrentWeather item={weatherDetails}/>}
            <PageContentWrapper classNameCustomAttributes={"py-8 px-2"}>
                {weatherDetails && <SevenDayWeather item={weatherDetails.daily}/>}
            </PageContentWrapper>
        </Layout>
    )
};

export default WeatherLocationDetails