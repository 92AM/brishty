import { getWorldNews } from '../WorldNewsService';
import { nyTimesNewsClient } from '../../apis/NyTimesNewsClient';
import { WORLD_NEW_CLIENT_RESPONSE, WORLD_NEWS_PARSED_MOCK } from '../../test-support/Stubs';

jest.mock('../../apis/NyTimesNewsClient');

const nyTimesNewsClientMock = nyTimesNewsClient as jest.Mock;

describe('WorldNewsService', () => {
    it('should get world news', async () => {
        nyTimesNewsClientMock.mockResolvedValue(WORLD_NEW_CLIENT_RESPONSE);

        const result = await getWorldNews();

        expect(result).toEqual(WORLD_NEWS_PARSED_MOCK);
    });
});
