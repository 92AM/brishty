import { fetchResponseFromClientOrCache } from '../CacheService';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify({ rates: 'how are you?' }));
});

describe('CacheService', () => {
    it('should retrieve response from api and store in cache', async () => {
        const url = 'http://localhost:8080/hello?getmesomeresourcefromcache=true';

        const result = await fetchResponseFromClientOrCache(url, 100);

        expect(result).toEqual({ rates: 'how are you?' });
    });

    it('should retrieve response from cache when available', async () => {
        const url = 'http://localhost:8080/hello?getmesomeDIFFERENTresourcefromcache=true';

        // Should add to cache
        await fetchResponseFromClientOrCache(url, 100);

        // Should fetch from cache
        const result = await fetchResponseFromClientOrCache(url, 100);

        expect(result).toEqual({ rates: 'how are you?' });
        // Should call fetch function once ... as the second call should get the value from cache.
        expect(fetchMock).toHaveBeenCalledTimes(1);
    });
});
