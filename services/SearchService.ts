import { getWindow } from './BrowserService';
import { fireGoogleAnalyticsEvent } from './GenericUtilityService';
import {
    GA_EVENT_NAVIGATED_EXECUTED_EXPANDED_MAP_SEARCH_ID,
    GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_GEO_COORDINATES_ID,
    GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_LOCATION_NAME_ID,
} from '../utility/constants';

export const validateAndExecuteSearch: (input: any) => void = (input: any) => {
    try {
        if (!input) {
            throw 'Please insert a valid city name and search again.';
        } else {
            searchWeatherByLocationName(input);
        }
    } catch (err) {
        alert(err);
    }
};

const searchWeatherByLocationName: (input: string) => void = (input: string) => {
    const windowLocation = getWindow().location;
    const url = '/weather/' + input;
    windowLocation.assign(url);
    fireGoogleAnalyticsEvent(
        'searched-weather-using-location-name',
        'navigated',
        `Navigated to : ${url}`,
        GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_LOCATION_NAME_ID,
    );
};

export const searchWeatherByGeoLocation: (
    locationName: string,
    latitude: string,
    longitude: string,
    countryCode: string,
) => void = (locationName: string, latitude: string, longitude: string, countryCode: string) => {
    const windowLocation = getWindow().location;
    const url = '/weather/' + locationName + '/' + latitude + '/' + longitude + '/' + countryCode;
    windowLocation.assign(url);
    fireGoogleAnalyticsEvent(
        'searched-weather-using-geo-coordinates',
        'navigated',
        `Navigated to : ${url}`,
        GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_GEO_COORDINATES_ID,
    );
};

export const executeExpandedMapSearch: (
    locationName: string | undefined,
    latitude: string | undefined,
    longitude: string | undefined,
    temperature: string | undefined,
    countryCode: string | undefined,
    shouldLoadDetailsPageWeather: string | undefined,
) => void = (
    locationName: string | undefined,
    latitude: string | undefined,
    longitude: string | undefined,
    temperature: string | undefined,
    countryCode: string | undefined,
    shouldLoadDetailsPageWeather: string | undefined,
) => {
    const windowLocation = getWindow().location;
    const url =
        '/weather/map/' +
        locationName +
        '/' +
        latitude +
        '/' +
        longitude +
        '/' +
        temperature +
        '/' +
        countryCode +
        '/' +
        shouldLoadDetailsPageWeather;
    windowLocation.assign(url);
    fireGoogleAnalyticsEvent(
        'executed-expanded-map-search',
        'navigated',
        `Navigated to : ${url}`,
        GA_EVENT_NAVIGATED_EXECUTED_EXPANDED_MAP_SEARCH_ID,
    );
};
