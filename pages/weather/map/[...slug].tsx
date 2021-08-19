import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import { MapLoader } from '../../../components/MapLoader';
import {
    getExpandedMapPageStaticMapProps,
    getHomePageStaticMapProps,
    getNearbyLocations,
} from '../../../services/WeatherDetailsService';
import { Coordinate, MainLocationForMap, MapProps, MapSize, NearbyLocationForMap } from '../../../interfaces';
import { ParsedUrlQuery } from 'querystring';
import { NEARBY_LOCATION_RADIUS, NEARBY_LOCATION_TYPE, NEARBY_LOCATIONS_LIMIT } from '../../../utility/constants';
import { parseBooleanStringOrDefault, useWindowSize } from '../../../services/GenericUtilityService';
import { setPageModel } from '../../../services/PageModelService';
import PageContentWrapper from '../../../components/PageContentWrapper';
import Link from 'next/link';

interface ExpandedWeatherMapProperties {
    mainLocationForMap: MainLocationForMap;
    nearbyLocationsForMap: NearbyLocationForMap[];
    mapProps: MapProps;
}

type Props = {
    expandedWeatherMapProperties: ExpandedWeatherMapProperties;
    errors?: string;
};

interface UrlParams extends ParsedUrlQuery {
    slug: string[];
}

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { slug } = params as UrlParams;
        const locationName = slug[0];
        const latitude = slug[1];
        const longitude = slug[2];
        const temperature = slug[3];
        const countryCode = slug[4];
        const shouldLoadExpandedMapPageProps = slug[5];

        const mainLocationForMap: MainLocationForMap = {
            coordinate: { latitude: latitude, longitude: longitude } as Coordinate,
            locationName: locationName,
            temperature: temperature,
            countryCode: countryCode,
        };

        const nearbyLocations = await getNearbyLocations(
            latitude,
            longitude,
            NEARBY_LOCATION_RADIUS,
            NEARBY_LOCATIONS_LIMIT,
            countryCode,
            NEARBY_LOCATION_TYPE,
        );

        const nearbyLocationsForMap: NearbyLocationForMap[] = [];

        nearbyLocations.forEach((location) => {
            const nearbyLocationForMap: NearbyLocationForMap = {
                coordinate: location.coordinate,
                locationName: location.name,
                distance: location.distance,
                countryCode: location.countryCode,
            };
            nearbyLocationsForMap.push(nearbyLocationForMap);
        });

        const mapProps = parseBooleanStringOrDefault(shouldLoadExpandedMapPageProps)
            ? getExpandedMapPageStaticMapProps()
            : getHomePageStaticMapProps();

        const expandedWeatherMapProperties: ExpandedWeatherMapProperties = {
            mainLocationForMap: mainLocationForMap,
            mapProps: mapProps,
            nearbyLocationsForMap: nearbyLocationsForMap,
        };

        return {
            props: {
                expandedWeatherMapProperties,
            },
            revalidate: 60,
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};

const Weather = ({ expandedWeatherMapProperties }: Props) => {
    useEffect(() => {
        setPageModel(expandedWeatherMapProperties);
    }, []);

    const size: MapSize = useWindowSize();

    const backLink: string =
        '/weather/' +
        expandedWeatherMapProperties.mainLocationForMap.locationName +
        '/' +
        expandedWeatherMapProperties.mainLocationForMap.coordinate.latitude +
        '/' +
        expandedWeatherMapProperties.mainLocationForMap.coordinate.longitude +
        '/' +
        expandedWeatherMapProperties.mainLocationForMap.countryCode;

    return (
        <Layout
            title={`Brishty - ${
                expandedWeatherMapProperties.mainLocationForMap &&
                expandedWeatherMapProperties.mainLocationForMap.locationName
            } weather`}
            searchTerm={expandedWeatherMapProperties.mainLocationForMap.locationName}
        >
            <PageContentWrapper>
                <span className={'text-blue-900 hover:underline'}>
                    <Link href={backLink}>
                        <a className={'flex flex-row'}>
                            <span className={'pt-4'}>
                                <svg
                                    className="h-7 w-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                            </span>
                            <span className={'pl-2 pt-4 text-xl'}>
                                {`Back to weather for`} {expandedWeatherMapProperties.mainLocationForMap.locationName}
                            </span>
                        </a>
                    </Link>
                </span>
            </PageContentWrapper>
            {expandedWeatherMapProperties.mainLocationForMap && (
                <div className={'z-0 relative pt-2'}>
                    <MapLoader
                        mainLocationForMap={expandedWeatherMapProperties.mainLocationForMap}
                        mapProps={expandedWeatherMapProperties.mapProps}
                        nearbyLocationsForMap={expandedWeatherMapProperties.nearbyLocationsForMap}
                        useFullViewport={true}
                        height={size.height}
                    />
                </div>
            )}
        </Layout>
    );
};

export default Weather;
