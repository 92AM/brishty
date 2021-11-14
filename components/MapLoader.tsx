import React from 'react';
import dynamic from 'next/dynamic';
import { MainLocationForMap, MapProps, NearbyLocationForMap } from '../interfaces';
import MapPlaceholder from './MapPlaceholder';

type Props = {
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
}: Props) => {
    const MapComponent = React.useMemo(
        () =>
            dynamic(() => import('./WeatherMap'), {
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
