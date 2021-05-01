import {handleLocationDetailsRoute} from "../webRouters/handleLocationDetailsRoute";
import {handleWeatherDetailsRoute} from "../webRouters/handleWeatherDetailsRoute";
import {Current, Weather, WeatherDetails} from "../interfaces";


const mapWeather = (weather: any): Weather => {
    return {
        id: weather.id as number,
        main: weather.main,
        description: weather.description,
        icon: weather.icon
    } as Weather;
}

const mapCurrentWeather = (currentWeather: any): Current => {
    const weather = mapWeather(currentWeather.weather[0]);
    return {
        weather: weather
    } as Current;
}

const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any
): WeatherDetails => {

    const currentWeather = mapCurrentWeather(weatherDetailsJson.current);

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