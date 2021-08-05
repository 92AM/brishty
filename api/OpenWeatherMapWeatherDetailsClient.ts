import { openWeatherMapApiKey } from '../services/ApiKeyService';

const OPEN_WEATHER_MAP_API_KEY = openWeatherMapApiKey;

export const openWeatherMapWeatherDetailsClient = async (
    latitude: string | string[] | undefined,
    longitude: string | string[] | undefined,
): Promise<any> => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
    const weatherDetailForGivenLocation = await fetch(url);
    return await weatherDetailForGivenLocation.json();
};
