import {
    convertKelvinToCelsius,
    fireGoogleAnalyticsEvent,
    getFormattedDateTime,
    parseBooleanStringOrDefault,
    parseSearchedLocationNameOrDefault,
    sanitiseCoordinate,
    windDegreeToText,
} from '../BrishtyUtility';
import * as gtag from '../../lib/gtag';

jest.mock('../../lib/gtag');

const gtagSpy = jest.spyOn(gtag, 'event');

describe('GenericUtilityService', () => {
    it('should convert kelvin to celsius', () => {
        const celsius = convertKelvinToCelsius(293.15);
        expect(celsius).toEqual('20°');
    });

    it('should get formatted date / time', () => {
        const result = getFormattedDateTime('1678536000', 'HH:MM');
        expect(result).toEqual('12:03');
    });

    it('should sanitise coordinate', () => {
        const result = sanitiseCoordinate('51.513333333');
        expect(result).toEqual('+51.513333333');
    });

    it('should fire GA event', () => {
        fireGoogleAnalyticsEvent({ action: 'fake-action', category: 'fake-category', label: 'fake-label', value: 1 });

        expect(gtagSpy).toHaveBeenCalledWith({
            action: 'fake-action',
            category: 'fake-category',
            label: 'fake-label',
            value: 1,
        });
    });

    it.each([
        { locationName: 'London', expectedResult: 'London' },
        { locationName: undefined, expectedResult: '' },
        { locationName: '()":*?London<>{}', expectedResult: 'London' },
        { locationName: 'this " is escaped', expectedResult: 'this  is escaped' },
    ])('should parse searched location', ({ locationName, expectedResult }) => {
        const actualResult = parseSearchedLocationNameOrDefault(locationName);

        expect(actualResult).toEqual(expectedResult);
    });

    it.each([
        { input: 'true', expectedResult: true },
        { input: 'false', expectedResult: false },
        { input: undefined, expectedResult: false },
        { input: 'some-rubbish-string', expectedResult: false },
    ])('should parse boolean string', ({ input, expectedResult }) => {
        const actualResult = parseBooleanStringOrDefault(input);

        expect(actualResult).toEqual(expectedResult);
    });

    it.each([
        { windDegree: 22, expectedResult: 'n' },
        { windDegree: 42, expectedResult: 'nne' },
        { windDegree: 65, expectedResult: 'ne' },
        { windDegree: 85, expectedResult: 'ene' },
        { windDegree: 110, expectedResult: 'e' },
        { windDegree: 130, expectedResult: 'ese' },
        { windDegree: 155, expectedResult: 'se' },
        { windDegree: 175, expectedResult: 'sse' },
        { windDegree: 200, expectedResult: 's' },
        { windDegree: 220, expectedResult: 'ssw' },
        { windDegree: 245, expectedResult: 'sw' },
        { windDegree: 265, expectedResult: 'wsw' },
        { windDegree: 292, expectedResult: 'w' },
        { windDegree: 310, expectedResult: 'wnw' },
        { windDegree: 330, expectedResult: 'nnw' },
        { windDegree: 338, expectedResult: 'nw' },
    ])('should convert wind degree to text', ({ windDegree, expectedResult }) => {
        const actualResult = windDegreeToText(windDegree);

        expect(actualResult).toEqual(expectedResult);
    });
});
