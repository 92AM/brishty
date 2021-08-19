import { getWindow } from './BrowserService';

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

export const searchWeatherByLocationName: (input: string) => void = (input: string) => {
    const windowLocation = getWindow().location;
    windowLocation.assign('/weather/' + input);
};

export const searchWeatherByGeoLocation: (
    locationName: string,
    latitude: string,
    longitude: string,
    countryCode: string,
) => void = (locationName: string, latitude: string, longitude: string, countryCode: string) => {
    const windowLocation = getWindow().location;
    windowLocation.assign('/weather/' + locationName + '/' + latitude + '/' + longitude + '/' + countryCode);
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
    windowLocation.assign(
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
            shouldLoadDetailsPageWeather,
    );
};
