import {handleLocationDetailsRoute} from "../webRouters/handleLocationDetailsRoute";
import {handleWeatherDetailsRoute} from "../webRouters/handleWeatherDetailsRoute";
import {Current, Weather, WeatherDetails} from "../interfaces";
import {convertKelvinToCelsius} from "./TemperatureConversionService";

const mapWeather = (weather: any): Weather => {
    return {
        main: weather.main,
        description: weather.description,
    } as Weather;
}

const mapCurrentWeather = (weatherDetailsJson: any): Current => {
    const current = weatherDetailsJson.current

    const weather = mapWeather(current.weather[0]);
    return {
        currentTemp: convertKelvinToCelsius(current.temp as number),
        maxTemp: convertKelvinToCelsius(weatherDetailsJson.daily[0].temp.max),
        minTemp: convertKelvinToCelsius(weatherDetailsJson.daily[0].temp.min),
        weather: weather,
    } as Current;
}

const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any
): WeatherDetails => {

    const currentWeather = mapCurrentWeather(weatherDetailsJson);

    return {
        locationName: locationName,
        latitude: weatherDetailsJson.lat,
        longitude: weatherDetailsJson.lon,
        timezone: weatherDetailsJson.timezone,
        current: currentWeather,
        fullRawWeatherData: JSON.stringify(weatherDetailsJson),
    } as WeatherDetails;
}

export const getWeatherDetails = async (
    locationName: string | string[] | undefined
): Promise<WeatherDetails> => {

    const locationDetailsAsJson = await handleLocationDetailsRoute(locationName);
    const searchedLocationCoordinates = locationDetailsAsJson.coord;
    const weatherDetailForGivenLocationAsJson = await handleWeatherDetailsRoute(
        searchedLocationCoordinates.lat,
        searchedLocationCoordinates.lon
    );

    return mapWeatherDetailsJsonToWeatherDetailsObject(
        locationName,
        weatherDetailForGivenLocationAsJson
    );
};