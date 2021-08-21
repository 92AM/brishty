import { LocationCurrentWeather } from '../interfaces';
import {
    getMoreStaticAfricaTopSearchLocations,
    getMoreStaticAmericasTopSearchLocations,
    getMoreStaticAsianTopSearchLocations,
    getMoreStaticEuropeanTopSearchLocations,
    getMoreStaticUkTopSearchLocations,
    getMoreStaticWorldTopSearchLocations,
    getStaticAfricaTopSearchLocations,
    getStaticAmericasTopSearchLocations,
    getStaticAsianTopSearchLocations,
    getStaticEuropeanTopSearchLocations,
    getStaticRestOfWorldTopSearchLocations,
    getStaticUkTopSearchLocations,
} from './StaticSearchLocationGeneratorService';
import { getLocationCurrentWeather } from './WeatherDetailsService';

export const getUkTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topUkStaticLocationSearchTerms = getStaticUkTopSearchLocations();
    const ukTopLocationsCurrentWeathers = [];

    for (const locationName of topUkStaticLocationSearchTerms) {
        ukTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return ukTopLocationsCurrentWeathers;
};

export const getUkMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topUkStaticLocationSearchTerms = getMoreStaticUkTopSearchLocations();
    const ukTopLocationsCurrentWeathers = [];

    for (const locationName of topUkStaticLocationSearchTerms) {
        ukTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return ukTopLocationsCurrentWeathers;
};

export const getEuropeTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topEuropeStaticLocationSearchTerms = getStaticEuropeanTopSearchLocations();
    const europeTopLocationsCurrentWeathers = [];

    for (const locationName of topEuropeStaticLocationSearchTerms) {
        europeTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return europeTopLocationsCurrentWeathers;
};

export const getEuropeMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topEuropeStaticLocationSearchTerms = getMoreStaticEuropeanTopSearchLocations();
    const europeTopLocationsCurrentWeathers = [];

    for (const locationName of topEuropeStaticLocationSearchTerms) {
        europeTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return europeTopLocationsCurrentWeathers;
};

export const getWorldTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topWorldStaticLocationSearchTerms = getStaticRestOfWorldTopSearchLocations();
    const worldTopLocationsCurrentWeathers = [];

    for (const locationName of topWorldStaticLocationSearchTerms) {
        worldTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return worldTopLocationsCurrentWeathers;
};

export const getWorldMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topWorldStaticLocationSearchTerms = getMoreStaticWorldTopSearchLocations();
    const worldTopLocationsCurrentWeathers = [];

    for (const locationName of topWorldStaticLocationSearchTerms) {
        worldTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return worldTopLocationsCurrentWeathers;
};

export const getAsiaTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAsianStaticLocationSearchTerms = getStaticAsianTopSearchLocations();
    const asianTopLocationsCurrentWeathers = [];

    for (const locationName of topAsianStaticLocationSearchTerms) {
        asianTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return asianTopLocationsCurrentWeathers;
};

export const getAsiaMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAsianStaticLocationSearchTerms = getMoreStaticAsianTopSearchLocations();
    const asianTopLocationsCurrentWeathers = [];

    for (const locationName of topAsianStaticLocationSearchTerms) {
        asianTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return asianTopLocationsCurrentWeathers;
};

export const getAmericasTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAmericasStaticLocationSearchTerms = getStaticAmericasTopSearchLocations();
    const americasTopLocationsCurrentWeathers = [];

    for (const locationName of topAmericasStaticLocationSearchTerms) {
        americasTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return americasTopLocationsCurrentWeathers;
};

export const getAmericasMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAmericasStaticLocationSearchTerms = getMoreStaticAmericasTopSearchLocations();
    const americasTopLocationsCurrentWeathers = [];

    for (const locationName of topAmericasStaticLocationSearchTerms) {
        americasTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return americasTopLocationsCurrentWeathers;
};

export const getAfricaTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAfricaStaticLocationSearchTerms = getStaticAfricaTopSearchLocations();
    const africaTopLocationsCurrentWeathers = [];

    for (const locationName of topAfricaStaticLocationSearchTerms) {
        africaTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return africaTopLocationsCurrentWeathers;
};

export const getAfricaMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAfricaStaticLocationSearchTerms = getMoreStaticAfricaTopSearchLocations();
    const africaTopLocationsCurrentWeathers = [];

    for (const locationName of topAfricaStaticLocationSearchTerms) {
        africaTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return africaTopLocationsCurrentWeathers;
};
