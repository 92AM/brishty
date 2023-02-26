import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { MainLocationForMap, MapProps, NearbyLocationForMap } from '../interfaces';
import MapPlaceholder from './MapPlaceholder';

type MapLoaderProps = {
    mainLocationForMap?: MainLocationForMap;
    mapProps: MapProps;
    nearbyLocationsForMap?: NearbyLocationForMap[];
    useFullViewport?: boolean;
    height?: number;
};

export const MapLoader = ({
    mainLocationForMap: mainLocationForMap,
    mapProps: mapProps,
    nearbyLocationsForMap: nearbyLocationsForMap,
    useFullViewport: useFullViewport,
    height: height,
}: MapLoaderProps) => {
    const MapComponent = useMemo(
        () =>
            dynamic(() => import('./Map'), {
                loading: () =>
                    useFullViewport ? <MapPlaceholder useFullViewport={useFullViewport} /> : <MapPlaceholder />,
                ssr: false,
            }),
        [],
    );
    return (
        <MapComponent
            mainLocationForMap={mainLocationForMap}
            mapProps={mapProps}
            nearbyLocationsForMap={nearbyLocationsForMap}
            useFullViewport={useFullViewport}
            height={height}
        />
    );
};
