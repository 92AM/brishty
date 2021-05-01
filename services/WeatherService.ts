import {handleLocationDetailsRoute} from "../webRouters/handleLocationDetailsRoute";
import {handleWeatherDetailsRoute} from "../webRouters/handleWeatherDetailsRoute";
import {WeatherDetails} from "../interfaces";


const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any
): WeatherDetails => {

    return {
        locationName: locationName,
        latitude: weatherDetailsJson.lat,
        longitude: weatherDetailsJson.lon,
        timezone: weatherDetailsJson.timezone,
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