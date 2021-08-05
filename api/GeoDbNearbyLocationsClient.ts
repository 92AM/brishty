import { geoDbCitiesApiKey } from '../services/ApiKeyService';

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
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude}${longitude}/nearbyCities?radius=${radius}&limit=${limit}&countryIds=${countryCode}&types=${type}`;
    const nearbyLocations = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': GEO_DB_CITIES_API_KEY,
            'x-rapidapi-host': X_RAPID_API_HOST_VALUE,
        },
    });

    return await nearbyLocations.json();
};
