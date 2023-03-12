import querystring from 'querystring';
import { GoogleAnalyticsEvent } from '../interfaces';
import moment from 'moment';
import * as gtag from '../lib/gtag';

export const convertKelvinToCelsius = (kelvin: number): string => {
    return `${Math.round(kelvin - 273.15)}°`;
};

export const getFormattedDateTime = (dateTime: string, format: string): string => {
    return moment.unix(Number(dateTime)).format(format);
};

export const windDegreeToText = (windDegree: number): string => {
    switch (true) {
        case windDegree < 22.5:
            return 'n';
        case windDegree < 45:
            return 'nne';
        case windDegree < 67.5:
            return 'ne';
        case windDegree < 90:
            return 'ene';
        case windDegree < 112.5:
            return 'e';
        case windDegree < 135:
            return 'ese';
        case windDegree < 157.5:
            return 'se';
        case windDegree < 180:
            return 'sse';
        case windDegree < 202.5:
            return 's';
        case windDegree < 225:
            return 'ssw';
        case windDegree < 247.5:
            return 'sw';
        case windDegree < 270:
            return 'wsw';
        case windDegree < 292.5:
            return 'w';
        case windDegree < 315:
            return 'wnw';
        case windDegree < 337.5:
            return 'nnw';
        default:
            return 'nw';
    }
};

export const sanitiseCoordinate = (coordinate: string | string[] | undefined): string => {
    const coordinateStr = String(coordinate);
    return (coordinateStr.indexOf('-') > -1 ? coordinateStr : '+' + coordinateStr).toString();
};

export const parseSearchedLocationNameOrDefault = (searchedLocationName: string | undefined): string => {
    const defaultValue = '';
    const decodedParameter = querystring.unescape(searchedLocationName ?? defaultValue);

    if (!decodedParameter) {
        return defaultValue;
    }
    return decodedParameter.replace(/[&\\#!^=;`|@+()$€£~%.'":*?<>{}]/g, '') ?? defaultValue;
};

export const parseBooleanStringOrDefault = (booleanAsString: string | undefined): boolean => {
    const defaultValue = false;

    if (!booleanAsString) {
        return defaultValue;
    }

    return booleanAsString.toLowerCase() === 'true';
};

export const fireGoogleAnalyticsEvent = (googleAnalyticsEvent: GoogleAnalyticsEvent): void => {
    gtag.event({ ...googleAnalyticsEvent });
};
