import { LayersControl, MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapProps, WeatherDetails } from '../interfaces';
import React from 'react';
import { WEATHER_MAP_ICON_SIZE } from '../utility/constants';
import { openWeatherMapApiKey } from '../services/ApiKeyService';

const OWM_API_KEY = openWeatherMapApiKey;

const getLocationPinSvgIcon = () => {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n' +
    '        <path d="M256 0C156.698 0 76 80.7 76 180c0 33.6 9.302 66.301 27.001 94.501l140.797 230.414c2.402 3.9 6.002 6.301 10.203 6.901 5.698.899 12.001-1.5 15.3-7.2l141.2-232.516C427.299 244.501 436 212.401 436 180 436 80.7 355.302 0 256 0zm0 270c-50.398 0-90-40.8-90-90 0-49.501 40.499-90 90-90s90 40.499 90 90c0 48.9-39.001 90-90 90z" fill="#1f2a37"/>\n' +
    '        <path d="M256 0v90c49.501 0 90 40.499 90 90 0 48.9-39.001 90-90 90v241.991c5.119.119 10.383-2.335 13.3-7.375L410.5 272.1c16.799-27.599 25.5-59.699 25.5-92.1C436 80.7 355.302 0 256 0z" fill="#1f2a37"/>\n' +
    '    </svg>'
  );
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

const WeatherLayer = ({
  layerDisplayName,
  omwLayerName,
  checked,
}: WeatherLayerProps) => {
  return (
    <LayersControl.Overlay checked={checked} name={layerDisplayName}>
      <TileLayer
        url={`https://tile.openweathermap.org/map/${omwLayerName}/{z}/{x}/{y}.png?appid=${OWM_API_KEY}`}
      />
    </LayersControl.Overlay>
  );
};

const MapLayer = ({
  layerDisplayName,
  mapLayerUrl,
  checked,
}: MapLayerProps) => {
  return (
    <LayersControl.BaseLayer checked={checked} name={layerDisplayName}>
      <TileLayer attribution={mapAttributions} url={mapLayerUrl} />
    </LayersControl.BaseLayer>
  );
};

type Props = {
  weatherDetails: WeatherDetails;
  mapProps: MapProps;
};

const WeatherMap = ({
  weatherDetails: weatherDetails,
  mapProps: mapProps,
}: Props) => {
  const londonLatitude = 51.5074;
  const londonLongitude = 0.1278;

  const latitude: number = parseInt(weatherDetails?.latitude) || londonLatitude;
  const longitude: number =
    parseInt(weatherDetails?.longitude) || londonLongitude;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={mapProps.zoomLevel}
      scrollWheelZoom={false}
      style={{ height: mapProps.height, width: mapProps.width }}
      className={mapProps.classNames}
    >
      {mapProps.displayMarker && (
        <Marker
          position={[latitude, longitude]}
          icon={L.divIcon({
            iconSize: [WEATHER_MAP_ICON_SIZE, WEATHER_MAP_ICON_SIZE],
            iconAnchor: [WEATHER_MAP_ICON_SIZE / 2, WEATHER_MAP_ICON_SIZE + 9],
            className: '',
            html: getLocationPinSvgIcon(),
          })}
        />
      )}
      <LayersControl position="topright">
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
        <WeatherLayer
          layerDisplayName={'Wind'}
          omwLayerName={'wind_new'}
          checked={mapProps.windChecked}
        />
      </LayersControl>
    </MapContainer>
  );
};

export default WeatherMap;
