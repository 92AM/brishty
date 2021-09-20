import { geoDbCitiesApiKey } from '../services/ApiKeyService';
import { fetchResponseFromClientOrCache } from '../services/CacheService';

const GEO_DB_CITIES_API_KEY = geoDbCitiesApiKey ? geoDbCitiesApiKey : '';
const X_RAPID_API_HOST_VALUE = 'wft-geo-db.p.rapidapi.com';

export const geoDbNearbyLocationsClient = async (
    latitude: string | string[] | undefined,
    longitude: string | string[] | undefined,
    radius: number,
    limit: number,
    countryCode: string | string[] | undefined,
    type: string,
): Promise<any> => {
    // 24 hours
    const cacheForInHours = 24;
    const cacheExpiryInMillisecond = cacheForInHours * 1000 * 60 * 60;
    const requestInit = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': GEO_DB_CITIES_API_KEY,
            'x-rapidapi-host': X_RAPID_API_HOST_VALUE,
        },
    };

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude}${longitude}/nearbyCities?radius=${radius}&limit=${limit}&countryIds=${countryCode}&types=${type}`;

    return await fetchResponseFromClientOrCache(url, cacheExpiryInMillisecond, requestInit);
};
