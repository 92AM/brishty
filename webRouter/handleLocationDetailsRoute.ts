import {apiKey} from "../utils/apiKey";

const API_KEY = apiKey;

export const handleGetLocationDetailsRoute = async (locationName: string | string[] | undefined): Promise<any> => {
    const locationDetails = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`
    )
    return await locationDetails.json()
};