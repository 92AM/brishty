import { WEATHER_OF_A_LOCATION_CLIENT_RESPONSE_MOCK } from '../../test-support/Stubs';
import { openWeatherMapLocationDetailsClient } from '../OpenWeatherMapLocationDetailsClient';
import { fetchResponseFromClientOrCache } from '../../services/CacheService';

jest.mock('../../services/CacheService');

const fetchResponseFromClientOrCacheMock = fetchResponseFromClientOrCache as jest.Mock;

describe('openWeatherMapLocationDetailsClient', () => {
    it('should retrieve weather map details by location name from client', async () => {
        const locationName = 'London';
        const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=undefined`;

        fetchResponseFromClientOrCacheMock.mockResolvedValue(WEATHER_OF_A_LOCATION_CLIENT_RESPONSE_MOCK);

        const result = await openWeatherMapLocationDetailsClient(locationName);

        expect(result).toEqual(WEATHER_OF_A_LOCATION_CLIENT_RESPONSE_MOCK);
        expect(fetchResponseFromClientOrCacheMock).toHaveBeenCalledWith(expectedUrl, 600000);
    });
});
