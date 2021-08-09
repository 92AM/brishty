/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import React from 'react';
import dynamic from 'next/dynamic';
import { Coordinate, MapProps } from '../interfaces';
import MapPlaceholder from './MapPlaceholder';

type Props = {
    coordinate?: Coordinate;
    mapProps: MapProps;
};

export const MapLoader = ({ coordinate: coordinate, mapProps: mapProps }: Props) => {
    const MapComponent = React.useMemo(
        () =>
            dynamic(() => import('./WeatherMap'), {
                loading: () => <MapPlaceholder />,
                ssr: false,
            }),
        [],
    );
    return <MapComponent coordinate={coordinate!} mapProps={mapProps} />;
};
