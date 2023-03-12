import { getConsentCookieValue, setConsentCookieValue } from '../CookieService';

const mockSetCookie = jest.fn();
const mockGetCookie = jest.fn().mockReturnValue('some-cookie-value');

jest.mock('js-cookie', () => ({
    set: jest.fn().mockImplementation((...args) => mockSetCookie(...args)),
    get: jest.fn().mockImplementation((...args) => mockGetCookie(...args)),
}));

describe('CookieService', () => {
    it('should set cookie value', () => {
        setConsentCookieValue('cookie-name', 'cookie-value');

        expect(mockSetCookie).toHaveBeenCalledWith('cookie-name', 'cookie-value');
    });

    it('should get cookie value', () => {
        const result = getConsentCookieValue('cookie-name');

        expect(mockGetCookie).toHaveBeenCalledWith('cookie-name');
        expect(result).toEqual('some-cookie-value');
    });
});
