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

const OWM_API_KEY = openWeatherMapApiKeyForMap;

const getMainLocationPinSvgIcon = () => {
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n' +
        '    <path d="M256 0C156.698 0 76 80.7 76 180c0 33.6 9.302 66.301 27.001 94.501l140.797 230.414c2.402 3.9 6.002 6.301 10.203 6.901 5.698.899 12.001-1.5 15.3-7.2l141.2-232.516C427.299 244.501 436 212.401 436 180 436 80.7 355.302 0 256 0zm0 270c-50.398 0-90-40.8-90-90 0-49.501 40.499-90 90-90s90 40.499 90 90c0 48.9-39.001 90-90 90z" fill="#1f2a37"/>\n' +
        '    <path d="M256 0v90c49.501 0 90 40.499 90 90 0 48.9-39.001 90-90 90v241.991c5.119.119 10.383-2.335 13.3-7.375L410.5 272.1c16.799-27.599 25.5-59.699 25.5-92.1C436 80.7 355.302 0 256 0z" fill="#1f2a37"/>\n' +
        '</svg>'
    );
};

const getNearbyLocationPinSvgIcon = () => {
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n' +
        '  <path d="M256 103.278c-39.429 0-71.505 32.077-71.505 71.505 0 39.429 32.077 71.505 71.505 71.505s71.505-32.077 71.505-71.505-32.076-71.505-71.505-71.505z" fill="#1f2a37"/>\n' +
        '  <path d="M256 0C158.107 0 78.465 79.642 78.465 177.535c0 40.042 28.089 106.034 83.486 196.143 40.502 65.88 81.577 121.48 81.987 122.033L256 512l12.062-16.289c.41-.553 41.485-56.153 81.987-122.033 55.397-90.109 83.486-156.101 83.486-196.143C433.535 79.642 353.893 0 256 0zm0 276.306c-55.98 0-101.522-45.543-101.522-101.522 0-55.98 45.543-101.522 101.522-101.522s101.522 45.543 101.522 101.522c0 55.979-45.542 101.522-101.522 101.522z" fill="#1f2a37"/>\n' +
        '</svg>\n'
    );
};

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
                        layerDisplayName={'OpenStreetMap - Black And White'}
                        mapLayerUrl={'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'}
                        checked={mapProps.blackAndWhiteChecked}
                    />
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
