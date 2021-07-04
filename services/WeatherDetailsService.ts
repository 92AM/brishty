import {locationDetailsRouteHandler} from "../webRouters/LocationDetailsRouteHandler";
import {weatherDetailsRouteHandler} from "../webRouters/WeatherDetailsRouteHandler";
import {
    Coordinate,
    Current,
    Daily,
    FeelLike,
    Hour,
    LocationCurrentWeather,
    NearbyLocation,
    Temperature,
    Weather,
    WeatherDetails
} from "../interfaces";
import {convertKelvinToCelsius, sanitiseCoordinate} from "./GenericUtilityService";
import {
    getMoreStaticAfricaTopSearchLocations,
    getMoreStaticAmericasTopSearchLocations,
    getMoreStaticAsianTopSearchLocations,
    getMoreStaticEuropeanTopSearchLocations,
    getMoreStaticUkTopSearchLocations,
    getStaticAfricaTopSearchLocations,
    getStaticAmericasTopSearchLocations,
    getStaticAsianTopSearchLocations,
    getStaticEuropeanTopSearchLocations,
    getStaticUkTopSearchLocations
} from "./StaticSearchLocationGeneratorService";
import {nearbyLocationsRouteHandler} from "../webRouters/NearbyLocationsRouteHandler";

const NEARBY_LOCATION_RADIUS = 100;
const NEARBY_LOCATIONS_LIMIT = 10;
const NEARBY_LOCATION_TYPE = "CITY";

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
        day: convertKelvinToCelsius(feelsLike.day),
        night: convertKelvinToCelsius(feelsLike.night),
        evening: convertKelvinToCelsius(feelsLike.eve),
        morning: convertKelvinToCelsius(feelsLike.morn),
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

const mapToCoordinate = (coordinate: any): Coordinate => {
    return {
        latitude: coordinate.lat,
        longitude: coordinate.lon,
    } as Coordinate;
}

const mapLocationDetailsJsonToLocationCurrentWeather = (locationDetailsJson: any): LocationCurrentWeather => {

    const imageLink = "/images/"
        + locationDetailsJson.name.toLowerCase().replace(/\s/g, "")
        + ".jpg";

    return {
        coordinate: mapToCoordinate(locationDetailsJson.coord),
        weather: mapToWeather(locationDetailsJson.weather[0]),
        temperature: convertKelvinToCelsius(locationDetailsJson.main.temp),
        feelsLike: convertKelvinToCelsius(locationDetailsJson.main.feels_like),
        minTemp: convertKelvinToCelsius(locationDetailsJson.main.temp_min),
        maxTemp: convertKelvinToCelsius(locationDetailsJson.main.temp_max),
        locationName: locationDetailsJson.name,
        countryCode: locationDetailsJson.sys.country,
        imageLink: imageLink
    } as LocationCurrentWeather;
}

const mapNearbyLocationsJsonToNearbyLocations = (nearbyLocationsJson: any): NearbyLocation[] => {

    const nearbyLocationsRaw = nearbyLocationsJson.data;
    const nearbyLocations: NearbyLocation[] = [];

    nearbyLocationsRaw.forEach((eachNearbyLocation: any) => {
        const coordinate = {
            lat: eachNearbyLocation.latitude,
            lon: eachNearbyLocation.longitude
        };
        const tempNearbyLocation: NearbyLocation = {
            type: eachNearbyLocation.type,
            name: eachNearbyLocation.name,
            country: eachNearbyLocation.country,
            countryCode: eachNearbyLocation.countryCode,
            region: eachNearbyLocation.region,
            regionCode: eachNearbyLocation.regionCode,
            distance: eachNearbyLocation.distance,
            coordinate: mapToCoordinate(coordinate)
        }
        nearbyLocations.push(tempNearbyLocation)
    })

    return nearbyLocations;
}

const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any,
    nearbyLocations: NearbyLocation[]
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
        nearbyLocations: nearbyLocations,
    } as WeatherDetails;
}

export const getLocationCurrentWeather = async (
    locationName: string | string[] | undefined
): Promise<LocationCurrentWeather> => {
    const locationDetailsAsJson = await locationDetailsRouteHandler(locationName);
    return mapLocationDetailsJsonToLocationCurrentWeather(locationDetailsAsJson);
};

export const getNearbyLocations = async (
    latitude: string,
    longitude: string,
    radius: number,
    limit: number,
    countryCode: string,
    type: string
): Promise<NearbyLocation[]> => {
    const nearbyLocationsAsJson = await nearbyLocationsRouteHandler(
        sanitiseCoordinate(latitude),
        sanitiseCoordinate(longitude),
        radius,
        limit,
        countryCode,
        type
    );
    return mapNearbyLocationsJsonToNearbyLocations(nearbyLocationsAsJson);
};

export const getWeatherDetailsWithLocationName = async (
    locationName: string | string[] | undefined
): Promise<WeatherDetails> => {
    const searchedLocationCurrentWeather = await getLocationCurrentWeather(locationName);
    const weatherDetailForGivenLocationAsJson = await weatherDetailsRouteHandler(
        searchedLocationCurrentWeather.coordinate.latitude,
        searchedLocationCurrentWeather.coordinate.longitude
    );
    const nearbyLocations = await getNearbyLocations(
        searchedLocationCurrentWeather.coordinate.latitude,
        searchedLocationCurrentWeather.coordinate.longitude,
        NEARBY_LOCATION_RADIUS,
        NEARBY_LOCATIONS_LIMIT,
        searchedLocationCurrentWeather.countryCode,
        NEARBY_LOCATION_TYPE
    );

    const nearbyLocationsWithSourceRemoved = removeSourceLocationFromNearbyLocation(
        nearbyLocations,
        locationName
    );

    return mapWeatherDetailsJsonToWeatherDetailsObject(
        locationName,
        weatherDetailForGivenLocationAsJson,
        nearbyLocationsWithSourceRemoved
    );
};

// export const getWeatherDetailsWithCoordinate = async (
//     latitude: string,
//     longitude: string,
//     locationName: string,
//     countryCode: string
// ): Promise<WeatherDetails> => {
//     const weatherDetailForGivenLocationAsJson = await weatherDetailsRouteHandler(
//         latitude,
//         longitude
//     );
//     const nearbyLocations = await getNearbyLocations(
//         latitude,
//         longitude,
//         NEARBY_LOCATION_RADIUS,
//         NEARBY_LOCATIONS_LIMIT,
//         countryCode,
//         NEARBY_LOCATION_TYPE
//     );
//
//     const nearbyLocationsWithSourceRemoved = removeSourceLocationFromNearbyLocation(nearbyLocations, locationName);
//
//     return mapWeatherDetailsJsonToWeatherDetailsObject(
//         locationName,
//         weatherDetailForGivenLocationAsJson,
//         nearbyLocationsWithSourceRemoved
//     );
// };

const removeSourceLocationFromNearbyLocation = (
    nearbyLocations: NearbyLocation[],
    sourceLocationName: string | string[] | undefined
): NearbyLocation[] => {

    nearbyLocations.forEach((eachNearbyLocation, index) => {
        if ((String(sourceLocationName).indexOf(eachNearbyLocation.name) > -1)) {
            nearbyLocations.splice(index, 1);
        }
    });

    return nearbyLocations;
}

export const getUkTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topUkStaticLocationSearchTerms = getStaticUkTopSearchLocations();
    let ukTopLocationsCurrentWeathers = [];

    for (let locationName of topUkStaticLocationSearchTerms) {
        ukTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return ukTopLocationsCurrentWeathers;
}

export const getUkMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topUkStaticLocationSearchTerms = getMoreStaticUkTopSearchLocations();
    let ukTopLocationsCurrentWeathers = [];

    for (let locationName of topUkStaticLocationSearchTerms) {
        ukTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return ukTopLocationsCurrentWeathers;
}

export const getEuropeTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topEuropeStaticLocationSearchTerms = getStaticEuropeanTopSearchLocations();
    let europeTopLocationsCurrentWeathers = [];

    for (let locationName of topEuropeStaticLocationSearchTerms) {
        europeTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return europeTopLocationsCurrentWeathers;
}

export const getEuropeMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topEuropeStaticLocationSearchTerms = getMoreStaticEuropeanTopSearchLocations();
    let europeTopLocationsCurrentWeathers = [];

    for (let locationName of topEuropeStaticLocationSearchTerms) {
        europeTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return europeTopLocationsCurrentWeathers;
}

export const getAsiaTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAsianStaticLocationSearchTerms = getStaticAsianTopSearchLocations();
    let asianTopLocationsCurrentWeathers = [];

    for (let locationName of topAsianStaticLocationSearchTerms) {
        asianTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return asianTopLocationsCurrentWeathers;
}

export const getAsiaMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAsianStaticLocationSearchTerms = getMoreStaticAsianTopSearchLocations();
    let asianTopLocationsCurrentWeathers = [];

    for (let locationName of topAsianStaticLocationSearchTerms) {
        asianTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return asianTopLocationsCurrentWeathers;
}

export const getAmericasTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAmericasStaticLocationSearchTerms = getStaticAmericasTopSearchLocations();
    let americasTopLocationsCurrentWeathers = [];

    for (let locationName of topAmericasStaticLocationSearchTerms) {
        americasTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return americasTopLocationsCurrentWeathers;
}

export const getAmericasMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAmericasStaticLocationSearchTerms = getMoreStaticAmericasTopSearchLocations();
    let americasTopLocationsCurrentWeathers = [];

    for (let locationName of topAmericasStaticLocationSearchTerms) {
        americasTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return americasTopLocationsCurrentWeathers;
}

export const getAfricaTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAfricaStaticLocationSearchTerms = getStaticAfricaTopSearchLocations();
    let africaTopLocationsCurrentWeathers = [];

    for (let locationName of topAfricaStaticLocationSearchTerms) {
        africaTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return africaTopLocationsCurrentWeathers;
}

export const getAfricaMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAfricaStaticLocationSearchTerms = getMoreStaticAfricaTopSearchLocations();
    let africaTopLocationsCurrentWeathers = [];

    for (let locationName of topAfricaStaticLocationSearchTerms) {
        africaTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return africaTopLocationsCurrentWeathers;
}