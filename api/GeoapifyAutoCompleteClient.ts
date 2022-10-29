import { geoApiFyApiKey } from '../services/ApplicationEnvironmentConfigService';
import { fetchResponseFromClientOrCache } from '../services/CacheService';

const URL = `https://api.geoapify.com/v1/geocode/autocomplete`;

export const geoApiFyAutoCompleteClient = async (searchTerm: string): Promise<any> => {
    // 10 minutes
    const cacheExpiryInMillisecond = 600000;

    const query = 'text=' + searchTerm + '&format=json&apiKey=' + geoApiFyApiKey;

    return await fetchResponseFromClientOrCache(URL + '?' + query, cacheExpiryInMillisecond);
};
