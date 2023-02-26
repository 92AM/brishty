// Deprecated - do not use anymore, this API is not in service anymore.

/**
 * @deprecated - This API has now been deprecated, please do not use it.
 *
 * @param searchTerm
 */
export const algoliaPlacesClient = async (searchTerm: string): Promise<any> => {
    const url = `https://places-dsn.algolia.net/1/places/query`;
    const params = 'hitsPerPage=5&language=en&type=city';

    const body = JSON.stringify({
        query: searchTerm,
        params: params,
    });

    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });
};
