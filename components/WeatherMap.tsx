import {MapContainer, Marker, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import {WeatherDetailsProps} from "../interfaces";
import React from "react";
import {
    WEATHER_MAP_HEIGHT,
    WEATHER_MAP_ICON_SIZE,
    WEATHER_MAP_WIDTH,
    WEATHER_MAP_ZOOM_LEVEL
} from "../utility/constants";

const getLocationPin = () => {
    return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n" +
        "        <path d=\"M256 0C156.698 0 76 80.7 76 180c0 33.6 9.302 66.301 27.001 94.501l140.797 230.414c2.402 3.9 6.002 6.301 10.203 6.901 5.698.899 12.001-1.5 15.3-7.2l141.2-232.516C427.299 244.501 436 212.401 436 180 436 80.7 355.302 0 256 0zm0 270c-50.398 0-90-40.8-90-90 0-49.501 40.499-90 90-90s90 40.499 90 90c0 48.9-39.001 90-90 90z\" fill=\"#1f2a37\"/>\n" +
        "        <path d=\"M256 0v90c49.501 0 90 40.499 90 90 0 48.9-39.001 90-90 90v241.991c5.119.119 10.383-2.335 13.3-7.375L410.5 272.1c16.799-27.599 25.5-59.699 25.5-92.1C436 80.7 355.302 0 256 0z\" fill=\"#1f2a37\"/>\n" +
        "    </svg>";
}

const WeatherMap = ({weatherDetails}: WeatherDetailsProps) => {

    const latitude: number = parseInt(weatherDetails?.latitude) || 0;
    const longitude: number = parseInt(weatherDetails?.longitude) || 0;

    return (
        <MapContainer center={[latitude, longitude]}
                      zoom={WEATHER_MAP_ZOOM_LEVEL}
                      scrollWheelZoom={false}
                      style={{height: WEATHER_MAP_HEIGHT, width: WEATHER_MAP_WIDTH}}
                      className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="">Brishty</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[latitude, longitude]}
                icon={L.divIcon({
                    iconSize: [WEATHER_MAP_ICON_SIZE, WEATHER_MAP_ICON_SIZE],
                    iconAnchor: [WEATHER_MAP_ICON_SIZE / 2, WEATHER_MAP_ICON_SIZE + 9],
                    className: "",
                    html: getLocationPin(),
                })}
            />
        </MapContainer>
    )
}

export default WeatherMap;