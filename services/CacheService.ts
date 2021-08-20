import cache from 'memory-cache';

export const getResponseFromClientOrCache = async (
    url: any,
    cacheExpiryInMillisecond: number,
    requestInitializer?: any | undefined,
): Promise<any> => {
    const cachedResponse = cache.get(url);

    if (cachedResponse) {
        return cachedResponse;
    } else {
        const response = await fetch(url, requestInitializer && requestInitializer);
        const responseData = response.json();
        await cache.put(url, responseData, cacheExpiryInMillisecond);
        return responseData;
    }
};
