import React from 'react';
import { Coordinate, MainLocationForMap, NearbyLocationForMap, WeatherDetailsProps } from '../interfaces';
import Layout from './Layout';
import PageContentWrapper from './PageContentWrapper';
import BasicCurrentlyAndHourlyWeather from './BasicCurrentlyAndHourlyWeather';
import NearbyLocations from './NearbyLocations';
import TodaysWeatherDescription from './TodaysWeatherDescription';
import DetailedCurrentWeather from './DetailedCurrentWeather';
import SevenDayWeather from './SevenDayWeather';
import { MapLoader } from './MapLoader';
import Link from 'next/link';
import { getWeatherDetailsPageStaticMapProps } from '../services/StaticMapPropsProviderService';
import { LeftArrowSvg } from './SvgFactory';

const WeatherLocationDetails = ({ weatherDetails }: WeatherDetailsProps) => {
    const mainLocationForMap: MainLocationForMap = {
        coordinate: { latitude: weatherDetails?.latitude, longitude: weatherDetails?.longitude } as Coordinate,
        locationName: weatherDetails.locationName,
        temperature: weatherDetails.current.currentTemp,
        countryCode: weatherDetails.countryCode,
    };

    const nearbyLocationsForMap: NearbyLocationForMap[] = [];

    weatherDetails?.nearbyLocations.forEach((location) => {
        const nearbyLocationForMap: NearbyLocationForMap = {
            coordinate: location.coordinate,
            locationName: location.name,
            distance: location.distance,
            countryCode: location.countryCode,
        };
        nearbyLocationsForMap.push(nearbyLocationForMap);
    });

    return (
        <Layout
            title={`Brishty - ${weatherDetails && weatherDetails.locationName} weather`}
            searchTerm={weatherDetails.locationName}
        >
            <PageContentWrapper>
                <span className={'text-gray-900 hover:underline'}>
                    <Link href={'/'}>
                        <a className={'flex flex-row'}>
                            <span className={'pt-4'}>
                                <LeftArrowSvg className={'h-7 w-7'} viewBox={'0 0 24 24'} />
                            </span>
                            <span className={'pl-2 pt-4 text-xl'}>{`Back to home`}</span>
                        </a>
                    </Link>
                </span>
                {weatherDetails && <BasicCurrentlyAndHourlyWeather item={weatherDetails} />}
            </PageContentWrapper>
            {mainLocationForMap && (
                <div className={'z-0 relative'}>
                    <MapLoader
                        mainLocationForMap={mainLocationForMap}
                        mapProps={getWeatherDetailsPageStaticMapProps()}
                        nearbyLocationsForMap={nearbyLocationsForMap}
                    />
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
