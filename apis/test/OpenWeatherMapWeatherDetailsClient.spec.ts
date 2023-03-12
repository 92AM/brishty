import { fetchResponseFromClientOrCache } from '../../services/CacheService';
import { WEATHER_MAP_DETAILS_BY_LAT_LON_CLIENT_RESPONSE_MOCK } from '../../test-support/Stubs';
import { openWeatherMapWeatherDetailsClient } from '../OpenWeatherMapWeatherDetailsClient';

jest.mock('../../services/CacheService');

const fetchResponseFromClientOrCacheMock = fetchResponseFromClientOrCache as jest.Mock;

describe('openWeatherMapWeatherDetailsClient', () => {
    it('should retrieve weather map details by coordinates from client', async () => {
        const latitude = '-0.1257';
        const longitude = '51.5085';
        const expectedUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${undefined}`;

        fetchResponseFromClientOrCacheMock.mockResolvedValue(WEATHER_MAP_DETAILS_BY_LAT_LON_CLIENT_RESPONSE_MOCK);

        const result = await openWeatherMapWeatherDetailsClient(latitude, longitude);

        expect(result).toEqual(WEATHER_MAP_DETAILS_BY_LAT_LON_CLIENT_RESPONSE_MOCK);
        expect(fetchResponseFromClientOrCacheMock).toHaveBeenCalledWith(expectedUrl, 180000);
    });
});
