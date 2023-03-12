import {
    getCurrentWeatherOfLocations,
    getWeatherDetailsByGeoLocation,
    getWeatherDetailsByLocationName,
    mapToCoordinate,
} from '../WeatherDetailsService';
import { Coordinate } from '../../interfaces';
import {
    NEARBY_LOCATIONS_PARSED_MOCK,
    WEATHER_DETAILS_BY_LOCATION_NAME_PARSED_MOCK,
    WEATHER_MAP_DETAILS_BY_LAT_LON_CLIENT_RESPONSE_MOCK,
    WEATHER_OF_A_LOCATION_CLIENT_PARSED_MOCK,
    WEATHER_OF_A_LOCATION_CLIENT_RESPONSE_MOCK,
} from '../../test-support/Stubs';
import { openWeatherMapLocationDetailsClient } from '../../apis/OpenWeatherMapLocationDetailsClient';
import { openWeatherMapWeatherDetailsClient } from '../../apis/OpenWeatherMapWeatherDetailsClient';
import { getNearbyLocations, removeSourceLocationFromNearbyLocation } from '../NearbyLocationsService';

jest.mock('../../apis/OpenWeatherMapLocationDetailsClient');
jest.mock('../../apis/OpenWeatherMapWeatherDetailsClient');
jest.mock('../NearbyLocationsService');

const openWeatherMapLocationDetailsClientMock = openWeatherMapLocationDetailsClient as jest.Mock;
const openWeatherMapWeatherDetailsClientMock = openWeatherMapWeatherDetailsClient as jest.Mock;
const getNearbyLocationsMock = getNearbyLocations as jest.Mock;
const removeSourceLocationFromNearbyLocationMock = removeSourceLocationFromNearbyLocation as jest.Mock;

const nearbyLocationsExcludingSourceMock = NEARBY_LOCATIONS_PARSED_MOCK.splice(1, 1);

describe('WeatherDetailsService', () => {
    it('should map to coordinate', async () => {
        const expectedCoordinates = {
            latitude: '51.50848',
            longitude: '-0.12493',
        } as Coordinate;

        const result = mapToCoordinate({ lat: '51.50848', lon: '-0.12493' });

        expect(result).toEqual(expectedCoordinates);
    });

    it('should get current weather of locations', async () => {
        openWeatherMapLocationDetailsClientMock.mockResolvedValue(WEATHER_OF_A_LOCATION_CLIENT_RESPONSE_MOCK);

        const result = await getCurrentWeatherOfLocations(['London']);

        expect(result).toEqual([WEATHER_OF_A_LOCATION_CLIENT_PARSED_MOCK]);
    });

    it('should get full weather details by location', async () => {
        openWeatherMapLocationDetailsClientMock.mockResolvedValue(WEATHER_OF_A_LOCATION_CLIENT_RESPONSE_MOCK);
        openWeatherMapWeatherDetailsClientMock.mockResolvedValue(WEATHER_MAP_DETAILS_BY_LAT_LON_CLIENT_RESPONSE_MOCK);
        getNearbyLocationsMock.mockResolvedValue(NEARBY_LOCATIONS_PARSED_MOCK);
        removeSourceLocationFromNearbyLocationMock.mockReturnValue(nearbyLocationsExcludingSourceMock);

        const result = await getWeatherDetailsByLocationName('London');

        expect(result).toEqual(WEATHER_DETAILS_BY_LOCATION_NAME_PARSED_MOCK);
    });

    it('should get full weather details by geo location', async () => {
        openWeatherMapWeatherDetailsClientMock.mockResolvedValue(WEATHER_MAP_DETAILS_BY_LAT_LON_CLIENT_RESPONSE_MOCK);
        getNearbyLocationsMock.mockResolvedValue(NEARBY_LOCATIONS_PARSED_MOCK);
        removeSourceLocationFromNearbyLocationMock.mockReturnValue(nearbyLocationsExcludingSourceMock);

        const result = await getWeatherDetailsByGeoLocation('London', '51.5085', '-0.1257', 'GB');

        expect(result).toEqual(WEATHER_DETAILS_BY_LOCATION_NAME_PARSED_MOCK);
    });
});
