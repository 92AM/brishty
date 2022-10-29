export const openWeatherMapApiKey: string | undefined = process.env.openWeatherMapApiKey;

export const openWeatherMapApiKeyForMap: string | undefined = process.env.openWeatherMapApiKeyForMap;

export const geoDbCitiesApiKey: string | undefined = process.env.geoDbCitiesApiKey;

export const nyTimesApiKey: string | undefined = process.env.nyTimesApiKey;

export const googleAnalyticsTrackingId: string | undefined = process.env.googleAnalyticsTrackingId;

export const geoApiFyApiKey: string | undefined = process.env.geoApiFyApiKey;

export const useTypeaheadLocationSearch = (): boolean => {
    return (
        process.env.useTypeaheadLocationSearch !== undefined &&
        process.env.useTypeaheadLocationSearch !== null &&
        process.env.useTypeaheadLocationSearch.toLowerCase() === 'true'
    );
};
