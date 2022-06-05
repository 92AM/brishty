import { LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MainLocationForMap, MapProps, NearbyLocationForMap } from '../interfaces';
import React, { Fragment } from 'react';
import { MAIN_LOCATION_MAP_ICON_SIZE, NEARBY_LOCATION_MAP_ICON_SIZE } from '../utility/constants';
import { openWeatherMapApiKeyForMap } from '../services/ApplicationEnvironmentConfigService';
import WeatherMapLegend from './WeatherMapLegend';
import { searchWeatherByGeoLocation } from '../services/SearchService';
import MapPositionResetController from './MapPositionResetController';
import MapExpandController from './DetailedWeatherMapExpandController';
import BasicMapExpandController from './BasicMapExpandController';
import { getMainLocationPinSvgIcon, getNearbyLocationPinSvgIcon } from './SvgFactory';

const OWM_API_KEY = openWeatherMapApiKeyForMap;

const onClickLoadNearbyLocationWeather = (
    locationName: string,
    latitude: string,
    longitude: string,
    countryCode: string,
) => {
    searchWeatherByGeoLocation(locationName, latitude, longitude, countryCode);
};

const mapAttributions =
    '&copy; <a href="">Brishty</a> ' +
    '| &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> ' +
    '| &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>';

interface WeatherLayerProps {
    layerDisplayName: string;
    omwLayerName: string;
    checked: boolean;
}

interface MapLayerProps {
    layerDisplayName: string;
    mapLayerUrl: string;
    checked: boolean;
}

interface NearbyLocationsCoordinatesProps {
    nearbyLocationsForMap: NearbyLocationForMap[];
}

const WeatherLayer = ({ layerDisplayName, omwLayerName, checked }: WeatherLayerProps) => {
    return (
        <LayersControl.Overlay checked={checked} name={layerDisplayName}>
            <TileLayer
                url={`https://tile.openweathermap.org/map/${omwLayerName}/{z}/{x}/{y}.png?appid=${OWM_API_KEY}`}
            />
        </LayersControl.Overlay>
    );
};

const MapLayer = ({ layerDisplayName, mapLayerUrl, checked }: MapLayerProps) => {
    return (
        <LayersControl.BaseLayer checked={checked} name={layerDisplayName}>
            <TileLayer attribution={mapAttributions} url={mapLayerUrl} />
        </LayersControl.BaseLayer>
    );
};

const NearbyLocationsMarkers = ({ nearbyLocationsForMap }: NearbyLocationsCoordinatesProps) => {
    return (
        <Fragment>
            <LayerGroup>
                {nearbyLocationsForMap.map((each, index) => (
                    <Marker
                        key={index}
                        position={[Number(each.coordinate.latitude), Number(each.coordinate.longitude)]}
                        icon={L.divIcon({
                            iconSize: [NEARBY_LOCATION_MAP_ICON_SIZE, NEARBY_LOCATION_MAP_ICON_SIZE],
                            iconAnchor: [NEARBY_LOCATION_MAP_ICON_SIZE / 2, NEARBY_LOCATION_MAP_ICON_SIZE + 9],
                            className: '',
                            html: getNearbyLocationPinSvgIcon(),
                        })}
                    >
                        {each.locationName && each.distance && each.countryCode && each.coordinate && (
                            <Popup>
                                <span className={'p-1 text-gray-800 text-lg'}>{each.locationName}</span> <br />
                                <span className={'p-1 text-gray-800 text-sm'}>{each.distance} miles away</span> <br />
                                <button
                                    className={
                                        'p-1 text-gray-100 bg-gray-800 mt-3 text-base rounded-xl border border-gray-800'
                                    }
                                    onClick={() =>
                                        onClickLoadNearbyLocationWeather(
                                            each.locationName,
                                            each.coordinate.latitude,
                                            each.coordinate.longitude,
                                            each.countryCode,
                                        )
                                    }
                                >
                                    <span className={'p-2'}>{'View Weather >'}</span>
                                </button>
                            </Popup>
                        )}
                    </Marker>
                ))}
            </LayerGroup>
        </Fragment>
    );
};

type Props = {
    mainLocationForMap?: MainLocationForMap;
    mapProps: MapProps;
    nearbyLocationsForMap?: NearbyLocationForMap[];
    useFullViewport?: boolean;
    height?: number;
};

const WeatherMap = ({
    mainLocationForMap: mainLocationForMap,
    mapProps: mapProps,
    nearbyLocationsForMap: nearbyLocationsForMap,
    useFullViewport: useFullViewport,
    height: height,
}: Props) => {
    const londonLatitude = 0;
    const londonLongitude = 0;

    const latitude: number = Number(mainLocationForMap?.coordinate?.latitude) || londonLatitude;
    const longitude: number = Number(mainLocationForMap?.coordinate?.longitude) || londonLongitude;

    if (latitude === 0 || longitude === 0) {
        return null;
    }

    return (
        <Fragment>
            <MapContainer
                center={[latitude, longitude]}
                zoom={mapProps.zoomLevel}
                scrollWheelZoom={false}
                style={{ height: useFullViewport ? height : mapProps.height, width: mapProps.width }}
                className={mapProps.classNames}
                zoomAnimation={true}
            >
                {mapProps.displayPositionResetController && (
                    <MapPositionResetController
                        controllerName={'Reset Position'}
                        resetMapPosition={[latitude, longitude]}
                        resetZoomLevel={mapProps.zoomLevel}
                        controllerClassName="bg-gray-800 text-gray-100 rounded-xl p-2 text-base"
                        renderPosition={{ position: 'bottomright' }}
                    />
                )}

                {mapProps.displayDetailedWeatherExpandMapController && (
                    <MapExpandController
                        controllerName={'Expand Map'}
                        controllerClassName="bg-gray-800 text-gray-100 rounded-xl p-2 text-base"
                        renderPosition={{ position: 'bottomright' }}
                        locationName={mainLocationForMap && mainLocationForMap.locationName}
                        latitude={mainLocationForMap && mainLocationForMap.coordinate?.latitude}
                        longitude={mainLocationForMap && mainLocationForMap.coordinate?.longitude}
                        temperature={mainLocationForMap && mainLocationForMap.temperature}
                        countryCode={mainLocationForMap?.countryCode}
                        shouldLoadDetailsPageWeather={'true'}
                    />
                )}

                {mapProps.displayBasicMapExpandController && (
                    <BasicMapExpandController
                        controllerName={'Expand Map'}
                        controllerClassName={'bg-gray-800 text-gray-100 rounded-xl p-2 text-base'}
                        renderPosition={{ position: 'bottomright' }}
                    />
                )}

                {mapProps.displayMarker && (
                    <Marker
                        position={[latitude, longitude]}
                        icon={L.divIcon({
                            iconSize: [MAIN_LOCATION_MAP_ICON_SIZE, MAIN_LOCATION_MAP_ICON_SIZE],
                            iconAnchor: [MAIN_LOCATION_MAP_ICON_SIZE / 2, MAIN_LOCATION_MAP_ICON_SIZE + 9],
                            className: '',
                            html: getMainLocationPinSvgIcon(),
                        })}
                    >
                        {mainLocationForMap?.locationName && mainLocationForMap?.temperature && (
                            <Popup>
                                <span className={'p-1 text-gray-800 text-lg'}>{mainLocationForMap.locationName}</span>{' '}
                                <br />
                                <span className={'p-1 text-gray-800 text-sm'}>
                                    Temperature : {mainLocationForMap.temperature}
                                </span>{' '}
                                <br />
                            </Popup>
                        )}
                    </Marker>
                )}
                <LayersControl position="topright">
                    {nearbyLocationsForMap && nearbyLocationsForMap.length !== 0 && (
                        <LayersControl.Overlay checked={true} name={'Show nearby locations'}>
                            <NearbyLocationsMarkers nearbyLocationsForMap={nearbyLocationsForMap} />
                        </LayersControl.Overlay>
                    )}
                    <MapLayer
                        layerDisplayName={'OpenStreetMap - Standard Mapnik'}
                        mapLayerUrl={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                        checked={mapProps.mapnikChecked}
                    />
                    <WeatherLayer
                        layerDisplayName={'Temperature'}
                        omwLayerName={'temp_new'}
                        checked={mapProps.temperatureChecked}
                    />
                    <WeatherLayer
                        layerDisplayName={'Clouds'}
                        omwLayerName={'clouds_new'}
                        checked={mapProps.cloudsChecked}
                    />
                    <WeatherLayer
                        layerDisplayName={'Precipitation'}
                        omwLayerName={'precipitation_new'}
                        checked={mapProps.precipitationChecked}
                    />
                    <WeatherLayer
                        layerDisplayName={'Pressure'}
                        omwLayerName={'pressure_new'}
                        checked={mapProps.pressureChecked}
                    />
                    <WeatherLayer layerDisplayName={'Wind'} omwLayerName={'wind_new'} checked={mapProps.windChecked} />
                </LayersControl>
            </MapContainer>
            <WeatherMapLegend />
        </Fragment>
    );
};

export default WeatherMap;
