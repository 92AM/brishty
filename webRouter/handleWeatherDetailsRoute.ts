import {apiKey} from "../utils/apiKey";

const API_KEY = apiKey;

export const handleWeatherDetailsRoute = async (latitude: string, longitude: string): Promise<any> => {
    const weatherDetailForGivenLocation = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
    return await weatherDetailForGivenLocation.json()
};