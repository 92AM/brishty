import { MapProps } from '../interfaces';
import {
    HOMEPAGE_MAP_HEIGHT,
    HOMEPAGE_MAP_WIDTH,
    HOMEPAGE_MAP_ZOOM_LEVEL,
    WEATHER_DETAILS_PAGE_MAP_HEIGHT,
    WEATHER_DETAILS_PAGE_MAP_WIDTH,
    WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL,
} from '../utility/constants';

const defaultMapProps = {
    mapnikChecked: true,
    temperatureChecked: false,
    cloudsChecked: false,
    precipitationChecked: false,
    pressureChecked: false,
    windChecked: false,
};

const defaultWeatherDetailsPageMapProps = {
    ...defaultMapProps,
    width: WEATHER_DETAILS_PAGE_MAP_WIDTH,
    height: WEATHER_DETAILS_PAGE_MAP_HEIGHT,
    displayMarker: true,
    classNames: '-z-10',
    displayPositionResetController: true,
};

const defaultHomePageMapProps = {
    ...defaultMapProps,
    zoomLevel: HOMEPAGE_MAP_ZOOM_LEVEL,
    width: HOMEPAGE_MAP_WIDTH,
    height: HOMEPAGE_MAP_HEIGHT,
    displayMarker: false,
    classNames: '-z-10 rounded-2xl shadow-lg',
    displayPositionResetController: false,
};

export const WEATHER_DETAILS_PAGE_STATIC_MAP_PROPS: MapProps = {
    ...defaultWeatherDetailsPageMapProps,
    zoomLevel: WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL,
    displayDetailedWeatherExpandMapController: true,
};

export const EXPANDED_MAP_PAGE_STATIC_MAP_PROPS: MapProps = {
    ...defaultWeatherDetailsPageMapProps,
    zoomLevel: WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL + 2,
    displayDetailedWeatherExpandMapController: false,
};

export const HOME_PAGE_STATIC_MAP_PROPS: MapProps = {
    ...defaultHomePageMapProps,
    displayBasicMapExpandController: true,
};

export const EXPANDED_HOME_PAGE_STATIC_MAP_PROPS: MapProps = {
    ...defaultHomePageMapProps,
    displayBasicMapExpandController: false,
};
