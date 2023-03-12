import { fetchResponseFromClientOrCache } from '../../services/CacheService';
import { NEARBY_LOCATIONS_CLIENT_RESPONSE_MOCK } from '../../test-support/Stubs';
import { geoDbNearbyLocationsClient } from '../GeoDbNearbyLocationsClient';
import { NEARBY_LOCATION_RADIUS, NEARBY_LOCATION_TYPE, NEARBY_LOCATIONS_LIMIT } from '../../utility/constants';

jest.mock('../../services/CacheService');

const fetchResponseFromClientOrCacheMock = fetchResponseFromClientOrCache as jest.Mock;

describe('geoDbNearbyLocationsClient', () => {
    it('should retrieve nearby locations from Geo DB client', async () => {
        const countryCode = 'GB';
        const latitude = '-0.1257';
        const longitude = '51.5085';

        const expectedUrl =
            `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude}${longitude}/nearbyCities?` +
            `radius=${NEARBY_LOCATION_RADIUS}&limit=${NEARBY_LOCATIONS_LIMIT}&countryIds=${countryCode}&types=${NEARBY_LOCATION_TYPE}`;

        const expectedRequestInit = {
            headers: { 'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com', 'x-rapidapi-key': '' },
            method: 'GET',
        };

        fetchResponseFromClientOrCacheMock.mockResolvedValue(NEARBY_LOCATIONS_CLIENT_RESPONSE_MOCK);

        const result = await geoDbNearbyLocationsClient(
            latitude,
            longitude,
            NEARBY_LOCATION_RADIUS,
            NEARBY_LOCATIONS_LIMIT,
            countryCode,
            NEARBY_LOCATION_TYPE,
        );

        expect(result).toEqual(NEARBY_LOCATIONS_CLIENT_RESPONSE_MOCK);
        expect(fetchResponseFromClientOrCacheMock).toHaveBeenCalledWith(expectedUrl, 86400000, expectedRequestInit);
    });
});
