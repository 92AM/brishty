/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import { openWeatherMapLocationDetailsClient } from '../api/OpenWeatherMapLocationDetailsClient';
import { openWeatherMapWeatherDetailsClient } from '../api/OpenWeatherMapWeatherDetailsClient';
import {
    Coordinate,
    Current,
    Daily,
    FeelLike,
    Hour,
    LocationCurrentWeather,
    NearbyLocation,
    Temperature,
    Weather,
    WeatherDetails,
} from '../interfaces';
import { convertKelvinToCelsius } from './GenericUtilityService';
import { NEARBY_LOCATION_RADIUS, NEARBY_LOCATION_TYPE, NEARBY_LOCATIONS_LIMIT } from '../utility/constants';
import { getNearbyLocations, removeSourceLocationFromNearbyLocation } from './NearbyLocationsService';

const mapToTemperature = (temperature: any): Temperature => {
    return {
        min: convertKelvinToCelsius(temperature.min),
        max: convertKelvinToCelsius(temperature.max),
        day: convertKelvinToCelsius(temperature.day),
        night: convertKelvinToCelsius(temperature.night),
        evening: convertKelvinToCelsius(temperature.eve),
        morning: convertKelvinToCelsius(temperature.morn),
    } as Temperature;
};

const mapToFeelsLike = (feelsLike: any): FeelLike => {
    return {
        day: convertKelvinToCelsius(feelsLike.day),
        night: convertKelvinToCelsius(feelsLike.night),
        evening: convertKelvinToCelsius(feelsLike.eve),
        morning: convertKelvinToCelsius(feelsLike.morn),
    } as FeelLike;
};

const mapToWeather = (weather: any): Weather => {
    return {
        main: weather.main,
        description: weather.description,
        icon: weather.icon,
    } as Weather;
};

const mapToCurrentWeather = (weatherDetailsJson: any): Current => {
    const current = weatherDetailsJson.current;
    const weather = mapToWeather(current.weather[0]);

    return {
        currentTemp: convertKelvinToCelsius(current.temp),
        maxTemp: convertKelvinToCelsius(weatherDetailsJson.daily[0].temp.max),
        minTemp: convertKelvinToCelsius(weatherDetailsJson.daily[0].temp.min),
        weather: weather,
        dateTime: current.dt,
        sunrise: current.sunrise,
        sunset: current.sunset,
        feelsLike: convertKelvinToCelsius(current.feels_like),
        pressure: current.pressure,
        humidity: current.humidity,
        uvIndex: current.uvi,
        visibility: current.visibility,
        windSpeed: current.wind_speed,
        windDegree: current.wind_deg,
        cloudiness: current.clouds,
    } as Current;
};

const mapToHourlyWeather = (weatherDetailsJson: any): Hour[] => {
    const hourlyWeather = weatherDetailsJson.hourly;
    const hourly: Hour[] = [];

    hourlyWeather.forEach((hour: any) => {
        const tempHour: Hour = {
            dateTime: hour.dt,
            temperature: convertKelvinToCelsius(hour.temp),
            weather: mapToWeather(hour.weather[0]),
            probabilityOfPrecipitation: hour.pop,
        };
        hourly.push(tempHour);
    });

    return hourly;
};

const mapToDailyWeather = (weatherDetailsJson: any): Daily[] => {
    const dailyWeather = weatherDetailsJson.daily;
    const daily: Daily[] = [];

    dailyWeather.forEach((dailyItem: any) => {
        const tempDaily: Daily = {
            dateTime: dailyItem.dt,
            sunrise: dailyItem.sunrise,
            sunset: dailyItem.sunset,
            moonrise: dailyItem.moonrise,
            moonset: dailyItem.moonset,
            temperature: mapToTemperature(dailyItem.temp),
            feelsLike: mapToFeelsLike(dailyItem.feels_like),
            weather: mapToWeather(dailyItem.weather[0]),
            pressure: dailyItem.pressure,
            humidity: dailyItem.humidity,
            windSpeed: dailyItem.wind_speed,
            windDegree: dailyItem.wind_deg,
            cloudiness: dailyItem.clouds,
            probabilityOfPrecipitation: dailyItem.pop,
            uvIndex: dailyItem.uvi,
        };
        daily.push(tempDaily);
    });

    return daily;
};

export const mapToCoordinate = (coordinate: any): Coordinate => {
    return {
        latitude: coordinate.lat,
        longitude: coordinate.lon,
    } as Coordinate;
};

const mapLocationDetailsJsonToLocationCurrentWeather = (locationDetailsJson: any): LocationCurrentWeather => {
    const imageLink = '/images/' + locationDetailsJson.name.toLowerCase().replace(/\s/g, '') + '.jpg';

    return {
        coordinate: mapToCoordinate(locationDetailsJson.coord),
        weather: mapToWeather(locationDetailsJson.weather[0]),
        temperature: convertKelvinToCelsius(locationDetailsJson.main.temp),
        feelsLike: convertKelvinToCelsius(locationDetailsJson.main.feels_like),
        minTemp: convertKelvinToCelsius(locationDetailsJson.main.temp_min),
        maxTemp: convertKelvinToCelsius(locationDetailsJson.main.temp_max),
        locationName: locationDetailsJson.name,
        countryCode: locationDetailsJson.sys.country,
        imageLink: imageLink,
    } as LocationCurrentWeather;
};

const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any,
    nearbyLocations: NearbyLocation[],
    countryCode: string | undefined | string[],
): WeatherDetails => {
    const currentWeather = mapToCurrentWeather(weatherDetailsJson);
    const hourly = mapToHourlyWeather(weatherDetailsJson);
    const daily = mapToDailyWeather(weatherDetailsJson);

    return {
        locationName: locationName,
        latitude: weatherDetailsJson.lat,
        longitude: weatherDetailsJson.lon,
        timezone: weatherDetailsJson.timezone,
        current: currentWeather,
        hourly: hourly,
        daily: daily,
        nearbyLocations: nearbyLocations,
        countryCode: countryCode,
    } as WeatherDetails;
};

export const getLocationCurrentWeather = async (
    locationName: string | string[] | undefined,
): Promise<LocationCurrentWeather> => {
    const locationDetailsAsJson = await openWeatherMapLocationDetailsClient(locationName);
    return mapLocationDetailsJsonToLocationCurrentWeather(locationDetailsAsJson);
};

export const getWeatherDetailsByLocationName = async (
    locationName: string | string[] | undefined,
): Promise<WeatherDetails> => {
    const searchedLocationCurrentWeather = await getLocationCurrentWeather(locationName);
    const weatherDetailForGivenLocationAsJson = await openWeatherMapWeatherDetailsClient(
        searchedLocationCurrentWeather.coordinate.latitude,
        searchedLocationCurrentWeather.coordinate.longitude,
    );
    const nearbyLocations = await getNearbyLocations(
        searchedLocationCurrentWeather.coordinate.latitude,
        searchedLocationCurrentWeather.coordinate.longitude,
        NEARBY_LOCATION_RADIUS,
        NEARBY_LOCATIONS_LIMIT,
        searchedLocationCurrentWeather.countryCode,
        NEARBY_LOCATION_TYPE,
    );

    const nearbyLocationsWithSourceRemoved = removeSourceLocationFromNearbyLocation(nearbyLocations, locationName);

    return mapWeatherDetailsJsonToWeatherDetailsObject(
        locationName,
        weatherDetailForGivenLocationAsJson,
        nearbyLocationsWithSourceRemoved,
        searchedLocationCurrentWeather.countryCode,
    );
};

export const getWeatherDetailsByGeoLocation = async (
    locationName: string | string[] | undefined,
    latitude: string | string[] | undefined,
    longitude: string | string[] | undefined,
    countryCode: string | string[] | undefined,
): Promise<WeatherDetails> => {
    const weatherDetailForGivenLocationAsJson = await openWeatherMapWeatherDetailsClient(latitude, longitude);
    const nearbyLocations = await getNearbyLocations(
        latitude,
        longitude,
        NEARBY_LOCATION_RADIUS,
        NEARBY_LOCATIONS_LIMIT,
        countryCode,
        NEARBY_LOCATION_TYPE,
    );

    const nearbyLocationsWithSourceRemoved = removeSourceLocationFromNearbyLocation(nearbyLocations, locationName);

    return mapWeatherDetailsJsonToWeatherDetailsObject(
        locationName,
        weatherDetailForGivenLocationAsJson,
        nearbyLocationsWithSourceRemoved,
        countryCode,
    );
};
