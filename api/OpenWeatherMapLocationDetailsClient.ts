import { openWeatherMapApiKey } from '../services/ApiKeyService';

const OPEN_WEATHER_MAP_API_KEY = openWeatherMapApiKey;

export const openWeatherMapLocationDetailsClient = async (
  locationName: string | string[] | undefined
): Promise<any> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
  const locationDetails = await fetch(url);
  return await locationDetails.json();
};
