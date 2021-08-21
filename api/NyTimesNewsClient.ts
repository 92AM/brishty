import { fetchResponseFromClientOrCache } from '../services/CacheService';
import { nyTimesApiKey } from '../services/ApiKeyService';

const NY_TIMES_API_KEY = nyTimesApiKey;

export const nyTimesNewsClient = async (): Promise<any> => {
    // 12 hours
    const cacheForInHours = 12;
    const cacheExpiryInMillisecond = cacheForInHours * 1000 * 60 * 60;

    const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NY_TIMES_API_KEY}`;

    return await fetchResponseFromClientOrCache(url, cacheExpiryInMillisecond);
};
