import { openWeatherMapApiKey } from '../services/ApiKeyService';
import { fetchResponseFromClientOrCache } from '../services/CacheService';

const OPEN_WEATHER_MAP_API_KEY = openWeatherMapApiKey;

export const openWeatherMapWeatherDetailsClient = async (
    latitude: string | string[] | undefined,
    longitude: string | string[] | undefined,
): Promise<any> => {
    // 3 minutes
    const cacheExpiryInMillisecond = 180000;

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}`;

    return await fetchResponseFromClientOrCache(url, cacheExpiryInMillisecond);
};
