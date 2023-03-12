import {
    onClickAboutUs,
    onClickReturnToHome,
    onClickTopUkWeathers,
    onClickTopWorldWeathers,
} from '../NavigationHandler';
import { getWindow } from '../BrowserService';

jest.mock('../BrowserService');

describe('NavigationHandler', () => {
    const getWindowMock = getWindow as jest.Mock;

    const window = {
        location: {
            assign: jest.fn(),
        },
    };

    beforeEach(() => {
        getWindowMock.mockReturnValue(window);
    });

    it('should navigate to home on click', () => {
        onClickReturnToHome();

        expect(window.location.assign).toHaveBeenCalledWith('/');
    });

    it('should navigate to about us page', () => {
        onClickAboutUs();

        expect(window.location.assign).toHaveBeenCalledWith('/about');
    });

    it('should navigate to UK top weather page', () => {
        onClickTopUkWeathers();

        expect(window.location.assign).toHaveBeenCalledWith('/weather/ukweather');
    });

    it('should navigate to world weather page', () => {
        onClickTopWorldWeathers();

        expect(window.location.assign).toHaveBeenCalledWith('/weather/worldweather');
    });
});
