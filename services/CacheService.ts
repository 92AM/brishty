import cache from 'memory-cache';

const fetchResponseFromClient = async (
    url: string,
    cacheExpiryInMillisecond: number,
    requestInitializer?: any | undefined,
): Promise<any> => {
    const responseData = (await fetch(url, requestInitializer && requestInitializer)).json();
    await cache.put(url, responseData, cacheExpiryInMillisecond);
    return responseData;
};

export const fetchResponseFromClientOrCache = async (
    url: string,
    cacheExpiryInMillisecond: number,
    requestInitializer?: any | undefined,
): Promise<any> => cache.get(url) ?? (await fetchResponseFromClient(url, cacheExpiryInMillisecond, requestInitializer));
