import { MapProps } from '../interfaces';
import {
    HOMEPAGE_MAP_HEIGHT,
    HOMEPAGE_MAP_WIDTH,
    HOMEPAGE_MAP_ZOOM_LEVEL,
    WEATHER_DETAILS_PAGE_MAP_HEIGHT,
    WEATHER_DETAILS_PAGE_MAP_WIDTH,
    WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL,
} from '../utility/constants';

export const getWeatherDetailsPageStaticMapProps = (): MapProps => {
    return {
        mapnikChecked: true,
        zoomLevel: WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL,
        width: WEATHER_DETAILS_PAGE_MAP_WIDTH,
        height: WEATHER_DETAILS_PAGE_MAP_HEIGHT,
        displayMarker: true,
        classNames: '-z-10',
        temperatureChecked: false,
        cloudsChecked: false,
        precipitationChecked: false,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: true,
        displayDetailedWeatherExpandMapController: true,
    };
};

export const getExpandedMapPageStaticMapProps = (): MapProps => {
    return {
        mapnikChecked: true,
        zoomLevel: WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL + 2,
        width: WEATHER_DETAILS_PAGE_MAP_WIDTH,
        height: WEATHER_DETAILS_PAGE_MAP_HEIGHT,
        displayMarker: true,
        classNames: '-z-10',
        temperatureChecked: false,
        cloudsChecked: false,
        precipitationChecked: false,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: true,
        displayDetailedWeatherExpandMapController: false,
    };
};

export const getHomePageStaticMapProps = (): MapProps => {
    return {
        mapnikChecked: true,
        zoomLevel: HOMEPAGE_MAP_ZOOM_LEVEL,
        width: HOMEPAGE_MAP_WIDTH,
        height: HOMEPAGE_MAP_HEIGHT,
        displayMarker: false,
        classNames: '-z-10 rounded-2xl shadow-lg',
        temperatureChecked: false,
        cloudsChecked: false,
        precipitationChecked: false,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: false,
        displayBasicMapExpandController: true,
    };
};

export const getExpandedHomePageStaticMapProps = (): MapProps => {
    return {
        mapnikChecked: true,
        zoomLevel: HOMEPAGE_MAP_ZOOM_LEVEL,
        width: HOMEPAGE_MAP_WIDTH,
        height: HOMEPAGE_MAP_HEIGHT,
        displayMarker: false,
        classNames: '-z-10 rounded-2xl shadow-lg',
        temperatureChecked: false,
        cloudsChecked: false,
        precipitationChecked: false,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: false,
        displayBasicMapExpandController: false,
    };
};
