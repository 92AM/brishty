import { geoApiFyApiKey } from '../services/ApplicationEnvironmentConfigService';

const URL = `https://api.geoapify.com/v1/geocode/autocomplete`;

export const geoApiFyAutoCompleteClient = async (searchTerm: string): Promise<any> => {

    const query = 'text=' + searchTerm + '&format=json&apiKey=' + geoApiFyApiKey;

    return await fetch(URL + '?' + query);
};
