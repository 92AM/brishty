import {handleLocationDetailsRoute} from "../webRouters/handleLocationDetailsRoute";
import {handleWeatherDetailsRoute} from "../webRouters/handleWeatherDetailsRoute";
import {Current, Hour, Weather, WeatherDetails} from "../interfaces";
import {convertKelvinToCelsius} from "./TemperatureConversionService";

const mapToWeather = (weather: any): Weather => {
    return {
        main: weather.main,
        description: weather.description,
        icon: weather.icon
    } as Weather;
}

const mapToCurrentWeather = (weatherDetailsJson: any): Current => {

    const current = weatherDetailsJson.current
    const weather = mapToWeather(current.weather[0]);

    return {
        currentTemp: convertKelvinToCelsius(current.temp),
        maxTemp: convertKelvinToCelsius(weatherDetailsJson.daily[0].temp.max),
        minTemp: convertKelvinToCelsius(weatherDetailsJson.daily[0].temp.min),
        weather: weather,
    } as Current;
}

const mapToHourlyWeather = (weatherDetailsJson: any): Hour[] => {

    const hourlyWeather = weatherDetailsJson.hourly;
    const hourly: Hour[] = [];

    hourlyWeather.forEach((hour: any) => {
        const tempHour: Hour = {
            dateTime: hour.dt,
            temp: convertKelvinToCelsius(hour.temp),
            weather: mapToWeather(hour.weather[0])
        }
        hourly.push(tempHour)
    })

    return hourly
}

const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any
): WeatherDetails => {

    const currentWeather = mapToCurrentWeather(weatherDetailsJson);
    const hourly = mapToHourlyWeather(weatherDetailsJson);

    return {
        locationName: locationName,
        latitude: weatherDetailsJson.lat,
        longitude: weatherDetailsJson.lon,
        timezone: weatherDetailsJson.timezone,
        current: currentWeather,
        hourly: hourly,
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