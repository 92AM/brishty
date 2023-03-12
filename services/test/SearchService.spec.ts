import { getWindow } from '../BrowserService';
import { executeExpandedMapSearch, searchWeatherByGeoLocation, validateAndExecuteSearch } from '../SearchService';
import { fireGoogleAnalyticsEvent } from '../../utility/BrishtyUtility';
import {
    GA_EVENT_NAVIGATED_EXECUTED_EXPANDED_MAP_SEARCH_ID,
    GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_GEO_COORDINATES_ID,
    GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_LOCATION_NAME_ID,
} from '../../utility/constants';

jest.mock('../BrowserService');
jest.mock('../../utility/BrishtyUtility');

describe('SearchService', () => {
    const getWindowMock = getWindow as jest.Mock;
    const windowLocationAssignMock = jest.fn();
    const fireGoogleAnalyticsEventMock = fireGoogleAnalyticsEvent as jest.Mock;

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const windowMock = {
        location: {
            assign: windowLocationAssignMock,
        },
    };

    beforeEach(() => {
        getWindowMock.mockReturnValue(windowMock);
    });

    it('should validate and execute location search to get weather data', async () => {
        validateAndExecuteSearch('London');

        expect(windowLocationAssignMock).toHaveBeenCalledWith('/weather/London');
        expect(fireGoogleAnalyticsEventMock).toHaveBeenCalledWith({
            action: 'searched-weather-using-location-name',
            category: 'navigated',
            label: 'Navigated to : /weather/London',
            value: GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_LOCATION_NAME_ID,
        });
    });

    it('should alert error if no input is supplied when searching for location', async () => {
        validateAndExecuteSearch(undefined);

        expect(window.alert).toHaveBeenCalledWith(new Error('Please insert a valid city name and search again.'));
    });

    it('should search for weather by geo location', async () => {
        searchWeatherByGeoLocation('London', '51.507222222', '-0.1275', 'GB');

        expect(windowLocationAssignMock).toHaveBeenCalledWith('/weather/London/51.507222222/-0.1275/GB');
        expect(fireGoogleAnalyticsEventMock).toHaveBeenCalledWith({
            action: 'searched-weather-using-geo-coordinates',
            category: 'navigated',
            label: 'Navigated to : /weather/London/51.507222222/-0.1275/GB',
            value: GA_EVENT_NAVIGATED_SEARCHED_WEATHER_USING_GEO_COORDINATES_ID,
        });
    });

    it('should execute expanded map search', async () => {
        executeExpandedMapSearch('London', '51.507222222', '-0.1275', '20', 'GB', 'true');

        expect(windowLocationAssignMock).toHaveBeenCalledWith('/weather/map/London/51.507222222/-0.1275/20/GB/true');
        expect(fireGoogleAnalyticsEventMock).toHaveBeenCalledWith({
            action: 'executed-expanded-map-search',
            category: 'navigated',
            label: 'Navigated to : /weather/map/London/51.507222222/-0.1275/20/GB/true',
            value: GA_EVENT_NAVIGATED_EXECUTED_EXPANDED_MAP_SEARCH_ID,
        });
    });
});
