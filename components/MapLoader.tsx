/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import React from 'react';
import dynamic from 'next/dynamic';
import { MainLocationForMap, MapProps, NearbyLocationForMap } from '../interfaces';
import MapPlaceholder from './MapPlaceholder';

type Props = {
    mainLocationForMap?: MainLocationForMap;
    mapProps: MapProps;
    nearbyLocationsForMap?: NearbyLocationForMap[];
};

export const MapLoader = ({
    mainLocationForMap: mainLocationForMap,
    mapProps: mapProps,
    nearbyLocationsForMap: nearbyLocationsForMap,
}: Props) => {
    const MapComponent = React.useMemo(
        () =>
            dynamic(() => import('./WeatherMap'), {
                loading: () => <MapPlaceholder />,
                ssr: false,
            }),
        [],
    );
    return (
        <MapComponent
            mainLocationForMap={mainLocationForMap!}
            mapProps={mapProps}
            nearbyLocationsForMap={nearbyLocationsForMap}
        />
    );
};
