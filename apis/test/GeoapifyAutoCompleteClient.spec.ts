/* eslint-disable  @typescript-eslint/ban-ts-comment */ // TODO : Fix me at some point!

import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import { geoApiFyAutoCompleteClient } from '../GeoapifyAutoCompleteClient';
import { AUTO_COMPLETE_CLIENT_RESPONSE_MOCK } from '../../test-support/Stubs';

enableFetchMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('geoApiFyAutoCompleteClient', () => {
    it('should retrieve auto complete response from Goeapify', async () => {
        const searchTerm = 'Lon';
        const expectedUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchTerm}&format=json&apiKey=${undefined}`;

        // @ts-ignore
        fetchMock.mockResolvedValue(AUTO_COMPLETE_CLIENT_RESPONSE_MOCK);

        const result = await geoApiFyAutoCompleteClient(searchTerm);

        expect(result).toEqual(AUTO_COMPLETE_CLIENT_RESPONSE_MOCK);
        expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
    });
});
