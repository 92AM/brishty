import { openWeatherMapApiKey } from '../services/ApplicationEnvironmentConfigService';
import { fetchResponseFromClientOrCache } from '../services/CacheService';

const OPEN_WEATHER_MAP_API_KEY = openWeatherMapApiKey;

export const openWeatherMapLocationDetailsClient = async (
    locationName: string | string[] | undefined,
): Promise<any> => {
    // 10 minutes
    const cacheExpiryInMillisecond = 600000;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${OPEN_WEATHER_MAP_API_KEY}`;

    return await fetchResponseFromClientOrCache(url, cacheExpiryInMillisecond);
};
