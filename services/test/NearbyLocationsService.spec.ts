import { getNearbyLocations, removeSourceLocationFromNearbyLocation } from '../NearbyLocationsService';
import { geoDbNearbyLocationsClient } from '../../apis/GeoDbNearbyLocationsClient';
import { NEARBY_LOCATIONS_CLIENT_RESPONSE_MOCK, NEARBY_LOCATIONS_PARSED_MOCK } from '../../test-support/Stubs';

jest.mock('../../apis/GeoDbNearbyLocationsClient');

const geoDbNearbyLocationsClientMock = geoDbNearbyLocationsClient as jest.Mock;

describe('NearbyLocationsService', () => {
    it('should get nearby locations', async () => {
        geoDbNearbyLocationsClientMock.mockResolvedValue(NEARBY_LOCATIONS_CLIENT_RESPONSE_MOCK);

        const result = await getNearbyLocations('51.50848', '-0.12493', 100, 10, 'GB', 'CITY');

        expect(result).toEqual(NEARBY_LOCATIONS_PARSED_MOCK);
    });

    it('should remove source location from nearby locations', async () => {
        geoDbNearbyLocationsClientMock.mockResolvedValue(NEARBY_LOCATIONS_CLIENT_RESPONSE_MOCK);
        expect(NEARBY_LOCATIONS_PARSED_MOCK.length).toBe(10);

        const result = removeSourceLocationFromNearbyLocation(NEARBY_LOCATIONS_PARSED_MOCK, 'West End');

        expect(result.length).toBe(9);
        result.map((location) => expect(location.name).not.toMatch('West End'));
    });
});
