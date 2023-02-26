import React from 'react';
import { MapLoader } from '../components/MapLoader';
import { Coordinate, MainLocationForMap, MapSize } from '../interfaces';
import Layout from '../components/Layout';
import { useWindowSize } from '../services/GenericUtilityService';
import PageContentWrapper from '../components/PageContentWrapper';
import Link from 'next/link';
import { EXPANDED_HOME_PAGE_STATIC_MAP_PROPS } from '../services/StaticMapPropsFactory';
import { LeftArrowSvg } from '../components/SvgFactory';
import { CookieModalLoader } from '../components/CookieModalLoader';

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
                mapProps={EXPANDED_HOME_PAGE_STATIC_MAP_PROPS}
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
                                <LeftArrowSvg className={'h-7 w-7'} viewBox={'0 0 24 24'} />
                            </span>
                            <span className={'pl-2 pt-4 text-xl'}>{`Back to home`}</span>
                        </a>
                    </Link>
                </span>
            </PageContentWrapper>
            <WeatherMap />
            <CookieModalLoader />
        </Layout>
    );
}

export default Map;
