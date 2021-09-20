const URL = `https://places-dsn.algolia.net/1/places/query`;
const PARAMS = 'hitsPerPage=5&language=en&type=city';

export const algoliaPlacesClient = async (searchTerm: string): Promise<any> => {
    const body = JSON.stringify({
        query: searchTerm,
        params: PARAMS,
    });

    return await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });
};
