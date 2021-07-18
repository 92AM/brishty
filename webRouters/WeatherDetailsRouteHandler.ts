import {openWeatherMapApiKey} from "../services/ApiKeyService";

const API_KEY = openWeatherMapApiKey;

export const weatherDetailsRouteHandler = async (latitude: string | string[] | undefined, longitude: string | string[] | undefined): Promise<any> => {

    const weatherDetailForGivenLocation = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )

    return await weatherDetailForGivenLocation.json()
};