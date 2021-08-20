import React from 'react';
import { MapLoader } from '../components/MapLoader';
import { Coordinate, MainLocationForMap, MapSize } from '../interfaces';
import Layout from '../components/Layout';
import { useWindowSize } from '../services/GenericUtilityService';
import PageContentWrapper from '../components/PageContentWrapper';
import Link from 'next/link';
import { getExpandedHomePageStaticMapProps } from '../services/WeatherDetailsService';

const WeatherMap = () => {
    const mainLocationForMap: MainLocationForMap = {
        coordinate: { latitude: '51.5074', longitude: '0.1278' } as Coordinate,
        locationName: '',
        temperature: '',
    };

    const size: MapSize = useWindowSize();

    return (
        <div className={'p-2 z-0 relative'}>
            <MapLoader
                mapProps={getExpandedHomePageStaticMapProps()}
                mainLocationForMap={mainLocationForMap}
                useFullViewport={true}
                height={size.height}
            />
        </div>
    );
};

function Map() {
    return (
        <Layout title="Brishty - search for weather" background={'bg-white'}>
            <PageContentWrapper>
                <span className={'text-gray-900 hover:underline'}>
                    <Link href={'/'}>
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
                            <span className={'pl-2 pt-4 text-xl'}>{`Back to home`}</span>
                        </a>
                    </Link>
                </span>
            </PageContentWrapper>
            <WeatherMap />
        </Layout>
    );
}

export default Map;
