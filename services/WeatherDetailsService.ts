import {locationDetailsRouteHandler} from "../webRouters/LocationDetailsRouteHandler";
import {weatherDetailsRouteHandler} from "../webRouters/WeatherDetailsRouteHandler";
import {Current, Daily, FeelLike, Hour, Temperature, Weather, WeatherDetails} from "../interfaces";
import {convertKelvinToCelsius} from "./GenericUtilityService";

const mapToTemperature = (temperature: any): Temperature => {
    return {
        min: convertKelvinToCelsius(temperature.min),
        max: convertKelvinToCelsius(temperature.max),
        day: convertKelvinToCelsius(temperature.day),
        night: convertKelvinToCelsius(temperature.night),
        evening: convertKelvinToCelsius(temperature.eve),
        morning: convertKelvinToCelsius(temperature.morn),
    } as Temperature;
}

const mapToFeelsLike = (feelsLike: any): FeelLike => {
    return {
        day: feelsLike.day,
        night: feelsLike.night,
        evening: feelsLike.eve,
        morning: feelsLike.morn,
    } as FeelLike;
}

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
}

const mapToHourlyWeather = (weatherDetailsJson: any): Hour[] => {

    const hourlyWeather = weatherDetailsJson.hourly;
    const hourly: Hour[] = [];

    hourlyWeather.forEach((hour: any) => {
        const tempHour: Hour = {
            dateTime: hour.dt,
            temperature: convertKelvinToCelsius(hour.temp),
            weather: mapToWeather(hour.weather[0]),
            probabilityOfPrecipitation: hour.pop
        }
        hourly.push(tempHour)
    })

    return hourly
}

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
        }
        daily.push(tempDaily)
    })

    return daily
}

const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any
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
        fullRawWeatherData: JSON.stringify(weatherDetailsJson),
    } as WeatherDetails;
}

export const getWeatherDetails = async (
    locationName: string | string[] | undefined
): Promise<WeatherDetails> => {

    const locationDetailsAsJson = await locationDetailsRouteHandler(locationName);
    const searchedLocationCoordinates = locationDetailsAsJson.coord;
    const weatherDetailForGivenLocationAsJson = await weatherDetailsRouteHandler(
        searchedLocationCoordinates.lat,
        searchedLocationCoordinates.lon
    );

    return mapWeatherDetailsJsonToWeatherDetailsObject(
        locationName,
        weatherDetailForGivenLocationAsJson
    );
};