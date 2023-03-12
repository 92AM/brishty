import { fetchResponseFromClientOrCache } from '../../services/CacheService';
import { WORLD_NEW_CLIENT_RESPONSE_MOCK } from '../../test-support/Stubs';
import { nyTimesNewsClient } from '../NyTimesNewsClient';

jest.mock('../../services/CacheService');

const fetchResponseFromClientOrCacheMock = fetchResponseFromClientOrCache as jest.Mock;

describe('nyTimesNewsClient', () => {
    it('should retrieve world weather from NY times client', async () => {
        const expectedUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=undefined`;

        fetchResponseFromClientOrCacheMock.mockResolvedValue(WORLD_NEW_CLIENT_RESPONSE_MOCK);

        const result = await nyTimesNewsClient();

        expect(result).toEqual(WORLD_NEW_CLIENT_RESPONSE_MOCK);
        expect(fetchResponseFromClientOrCacheMock).toHaveBeenCalledWith(expectedUrl, 43200000);
    });
});
