import React from 'react';
import { Coordinate, WeatherDetailsProps } from '../interfaces';
import Layout from './Layout';
import PageContentWrapper from './PageContentWrapper';
import BasicCurrentlyAndHourlyWeather from './BasicCurrentlyAndHourlyWeather';
import NearbyLocations from './NearbyLocations';
import TodaysWeatherDescription from './TodaysWeatherDescription';
import DetailedCurrentWeather from './DetailedCurrentWeather';
import SevenDayWeather from './SevenDayWeather';
import { MapLoader } from './MapLoader';
import { getWeatherDetailsPageStaticMapProps } from '../services/WeatherDetailsService';

const WeatherLocationDetails = ({ weatherDetails }: WeatherDetailsProps) => {
    const coordinate = { latitude: weatherDetails?.latitude, longitude: weatherDetails?.longitude } as Coordinate;
    return (
        <Layout
            title={`Brishty - ${weatherDetails && weatherDetails.locationName} weather`}
            searchTerm={weatherDetails.locationName}
        >
            <PageContentWrapper>
                {weatherDetails && <BasicCurrentlyAndHourlyWeather item={weatherDetails} />}
            </PageContentWrapper>
            {coordinate.latitude && coordinate.longitude && (
                <div className={'z-0 relative'}>
                    <MapLoader coordinate={coordinate} mapProps={getWeatherDetailsPageStaticMapProps()} />
                </div>
            )}
            {weatherDetails?.nearbyLocations && weatherDetails?.nearbyLocations.length != 0 ? (
                <NearbyLocations items={weatherDetails?.nearbyLocations} />
            ) : (
                <div className="bg-gray-800 border border-gray-100 pt-1" />
            )}
            <PageContentWrapper classNameCustomAttributes={'py-8 px-2'}>
                {weatherDetails && <TodaysWeatherDescription item={weatherDetails} />}
            </PageContentWrapper>
            {weatherDetails && <DetailedCurrentWeather item={weatherDetails} />}
            <PageContentWrapper classNameCustomAttributes={'py-8 px-2'}>
                {weatherDetails && <SevenDayWeather item={weatherDetails.daily} />}
            </PageContentWrapper>
        </Layout>
    );
};

export default WeatherLocationDetails;
