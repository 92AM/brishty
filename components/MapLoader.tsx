/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import React from 'react';
import dynamic from 'next/dynamic';
import { MapProps, WeatherDetails } from '../interfaces';
import MapPlaceholder from './MapPlaceholder';

type Props = {
    weatherDetails?: WeatherDetails;
    mapProps: MapProps;
};

export const MapLoader = ({ weatherDetails: weatherDetails, mapProps: mapProps }: Props) => {
    const MapComponent = React.useMemo(
        () =>
            dynamic(() => import('./WeatherMap'), {
                loading: () => <MapPlaceholder />,
                ssr: false,
            }),
        [],
    );
    return <MapComponent weatherDetails={weatherDetails!} mapProps={mapProps} />;
};
