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
