import {openWeatherMapApiKey} from "../services/ApiKeyService";

const API_KEY = openWeatherMapApiKey;

export const locationDetailsRouteHandler = async (locationName: string | string[] | undefined): Promise<any> => {

    const locationDetails = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`
    )

    return await locationDetails.json()
};