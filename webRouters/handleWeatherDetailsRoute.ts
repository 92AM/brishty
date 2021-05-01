import {openWeatherMapApiKey} from "../services/ApiKeyService";

const API_KEY = openWeatherMapApiKey;

export const handleWeatherDetailsRoute = async (latitude: string, longitude: string): Promise<any> => {

    const weatherDetailForGivenLocation = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )

    return await weatherDetailForGivenLocation.json()
};