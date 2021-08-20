import { openWeatherMapLocationDetailsClient } from '../api/OpenWeatherMapLocationDetailsClient';
import { openWeatherMapWeatherDetailsClient } from '../api/OpenWeatherMapWeatherDetailsClient';
import {
    Coordinate,
    Current,
    Daily,
    FeelLike,
    Hour,
    LocationCurrentWeather,
    MapProps,
    NearbyLocation,
    Temperature,
    Weather,
    WeatherDetails,
} from '../interfaces';
import { convertKelvinToCelsius, sanitiseCoordinate } from './GenericUtilityService';
import {
    getMoreStaticAfricaTopSearchLocations,
    getMoreStaticAmericasTopSearchLocations,
    getMoreStaticAsianTopSearchLocations,
    getMoreStaticEuropeanTopSearchLocations,
    getMoreStaticUkTopSearchLocations,
    getMoreStaticWorldTopSearchLocations,
    getStaticAfricaTopSearchLocations,
    getStaticAmericasTopSearchLocations,
    getStaticAsianTopSearchLocations,
    getStaticEuropeanTopSearchLocations,
    getStaticRestOfWorldTopSearchLocations,
    getStaticUkTopSearchLocations,
} from './StaticSearchLocationGeneratorService';
import { geoDbNearbyLocationsClient } from '../api/GeoDbNearbyLocationsClient';
import {
    HOMEPAGE_MAP_HEIGHT,
    HOMEPAGE_MAP_WIDTH,
    HOMEPAGE_MAP_ZOOM_LEVEL,
    NEARBY_LOCATION_RADIUS,
    NEARBY_LOCATION_TYPE,
    NEARBY_LOCATIONS_LIMIT,
    WEATHER_DETAILS_PAGE_MAP_HEIGHT,
    WEATHER_DETAILS_PAGE_MAP_WIDTH,
    WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL,
} from '../utility/constants';

const mapToTemperature = (temperature: any): Temperature => {
    return {
        min: convertKelvinToCelsius(temperature.min),
        max: convertKelvinToCelsius(temperature.max),
        day: convertKelvinToCelsius(temperature.day),
        night: convertKelvinToCelsius(temperature.night),
        evening: convertKelvinToCelsius(temperature.eve),
        morning: convertKelvinToCelsius(temperature.morn),
    } as Temperature;
};

const mapToFeelsLike = (feelsLike: any): FeelLike => {
    return {
        day: convertKelvinToCelsius(feelsLike.day),
        night: convertKelvinToCelsius(feelsLike.night),
        evening: convertKelvinToCelsius(feelsLike.eve),
        morning: convertKelvinToCelsius(feelsLike.morn),
    } as FeelLike;
};

const mapToWeather = (weather: any): Weather => {
    return {
        main: weather.main,
        description: weather.description,
        icon: weather.icon,
    } as Weather;
};

const mapToCurrentWeather = (weatherDetailsJson: any): Current => {
    const current = weatherDetailsJson.current;
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
};

const mapToHourlyWeather = (weatherDetailsJson: any): Hour[] => {
    const hourlyWeather = weatherDetailsJson.hourly;
    const hourly: Hour[] = [];

    hourlyWeather.forEach((hour: any) => {
        const tempHour: Hour = {
            dateTime: hour.dt,
            temperature: convertKelvinToCelsius(hour.temp),
            weather: mapToWeather(hour.weather[0]),
            probabilityOfPrecipitation: hour.pop,
        };
        hourly.push(tempHour);
    });

    return hourly;
};

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
        };
        daily.push(tempDaily);
    });

    return daily;
};

const mapToCoordinate = (coordinate: any): Coordinate => {
    return {
        latitude: coordinate.lat,
        longitude: coordinate.lon,
    } as Coordinate;
};

const mapLocationDetailsJsonToLocationCurrentWeather = (locationDetailsJson: any): LocationCurrentWeather => {
    const imageLink = '/images/' + locationDetailsJson.name.toLowerCase().replace(/\s/g, '') + '.jpg';

    return {
        coordinate: mapToCoordinate(locationDetailsJson.coord),
        weather: mapToWeather(locationDetailsJson.weather[0]),
        temperature: convertKelvinToCelsius(locationDetailsJson.main.temp),
        feelsLike: convertKelvinToCelsius(locationDetailsJson.main.feels_like),
        minTemp: convertKelvinToCelsius(locationDetailsJson.main.temp_min),
        maxTemp: convertKelvinToCelsius(locationDetailsJson.main.temp_max),
        locationName: locationDetailsJson.name,
        countryCode: locationDetailsJson.sys.country,
        imageLink: imageLink,
    } as LocationCurrentWeather;
};

const mapNearbyLocationsJsonToNearbyLocations = (nearbyLocationsJson: any): NearbyLocation[] => {
    const nearbyLocationsRaw = nearbyLocationsJson.data;
    const nearbyLocations: NearbyLocation[] = [];

    nearbyLocationsRaw.forEach((eachNearbyLocation: any) => {
        const coordinate = {
            lat: eachNearbyLocation.latitude,
            lon: eachNearbyLocation.longitude,
        };
        const tempNearbyLocation: NearbyLocation = {
            type: eachNearbyLocation.type,
            name: eachNearbyLocation.name,
            country: eachNearbyLocation.country,
            countryCode: eachNearbyLocation.countryCode,
            region: eachNearbyLocation.region,
            regionCode: eachNearbyLocation.regionCode,
            distance: eachNearbyLocation.distance,
            coordinate: mapToCoordinate(coordinate),
        };
        nearbyLocations.push(tempNearbyLocation);
    });

    return nearbyLocations;
};

const mapWeatherDetailsJsonToWeatherDetailsObject = (
    locationName: string | string[] | undefined,
    weatherDetailsJson: any,
    nearbyLocations: NearbyLocation[],
    countryCode: string | undefined | string[],
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
        countryCode: countryCode,
    } as WeatherDetails;
};

export const getLocationCurrentWeather = async (
    locationName: string | string[] | undefined,
): Promise<LocationCurrentWeather> => {
    const locationDetailsAsJson = await openWeatherMapLocationDetailsClient(locationName);
    return mapLocationDetailsJsonToLocationCurrentWeather(locationDetailsAsJson);
};

export const getNearbyLocations = async (
    latitude: string | string[] | undefined,
    longitude: string | string[] | undefined,
    radius: number,
    limit: number,
    countryCode: string | string[] | undefined,
    type: string,
): Promise<NearbyLocation[]> => {
    const nearbyLocationsAsJson = await geoDbNearbyLocationsClient(
        sanitiseCoordinate(latitude),
        sanitiseCoordinate(longitude),
        radius,
        limit,
        countryCode,
        type,
    );
    return mapNearbyLocationsJsonToNearbyLocations(nearbyLocationsAsJson);
};

export const getWeatherDetailsByLocationName = async (
    locationName: string | string[] | undefined,
): Promise<WeatherDetails> => {
    const searchedLocationCurrentWeather = await getLocationCurrentWeather(locationName);
    const weatherDetailForGivenLocationAsJson = await openWeatherMapWeatherDetailsClient(
        searchedLocationCurrentWeather.coordinate.latitude,
        searchedLocationCurrentWeather.coordinate.longitude,
    );
    const nearbyLocations = await getNearbyLocations(
        searchedLocationCurrentWeather.coordinate.latitude,
        searchedLocationCurrentWeather.coordinate.longitude,
        NEARBY_LOCATION_RADIUS,
        NEARBY_LOCATIONS_LIMIT,
        searchedLocationCurrentWeather.countryCode,
        NEARBY_LOCATION_TYPE,
    );

    const nearbyLocationsWithSourceRemoved = removeSourceLocationFromNearbyLocation(nearbyLocations, locationName);

    return mapWeatherDetailsJsonToWeatherDetailsObject(
        locationName,
        weatherDetailForGivenLocationAsJson,
        nearbyLocationsWithSourceRemoved,
        searchedLocationCurrentWeather.countryCode,
    );
};

export const getWeatherDetailsByGeoLocation = async (
    locationName: string | string[] | undefined,
    latitude: string | string[] | undefined,
    longitude: string | string[] | undefined,
    countryCode: string | string[] | undefined,
): Promise<WeatherDetails> => {
    const weatherDetailForGivenLocationAsJson = await openWeatherMapWeatherDetailsClient(latitude, longitude);
    const nearbyLocations = await getNearbyLocations(
        latitude,
        longitude,
        NEARBY_LOCATION_RADIUS,
        NEARBY_LOCATIONS_LIMIT,
        countryCode,
        NEARBY_LOCATION_TYPE,
    );

    const nearbyLocationsWithSourceRemoved = removeSourceLocationFromNearbyLocation(nearbyLocations, locationName);

    return mapWeatherDetailsJsonToWeatherDetailsObject(
        locationName,
        weatherDetailForGivenLocationAsJson,
        nearbyLocationsWithSourceRemoved,
        countryCode,
    );
};

const removeSourceLocationFromNearbyLocation = (
    nearbyLocations: NearbyLocation[],
    sourceLocationName: string | string[] | undefined,
): NearbyLocation[] => {
    nearbyLocations.forEach((eachNearbyLocation, index) => {
        if (String(sourceLocationName).indexOf(eachNearbyLocation.name) > -1) {
            nearbyLocations.splice(index, 1);
        }
    });

    return nearbyLocations;
};

export const getUkTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topUkStaticLocationSearchTerms = getStaticUkTopSearchLocations();
    const ukTopLocationsCurrentWeathers = [];

    for (const locationName of topUkStaticLocationSearchTerms) {
        ukTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return ukTopLocationsCurrentWeathers;
};

export const getUkMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topUkStaticLocationSearchTerms = getMoreStaticUkTopSearchLocations();
    const ukTopLocationsCurrentWeathers = [];

    for (const locationName of topUkStaticLocationSearchTerms) {
        ukTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return ukTopLocationsCurrentWeathers;
};

export const getEuropeTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topEuropeStaticLocationSearchTerms = getStaticEuropeanTopSearchLocations();
    const europeTopLocationsCurrentWeathers = [];

    for (const locationName of topEuropeStaticLocationSearchTerms) {
        europeTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return europeTopLocationsCurrentWeathers;
};

export const getEuropeMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topEuropeStaticLocationSearchTerms = getMoreStaticEuropeanTopSearchLocations();
    const europeTopLocationsCurrentWeathers = [];

    for (const locationName of topEuropeStaticLocationSearchTerms) {
        europeTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return europeTopLocationsCurrentWeathers;
};

export const getWorldTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topWorldStaticLocationSearchTerms = getStaticRestOfWorldTopSearchLocations();
    const worldTopLocationsCurrentWeathers = [];

    for (const locationName of topWorldStaticLocationSearchTerms) {
        worldTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return worldTopLocationsCurrentWeathers;
};

export const getWorldMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topWorldStaticLocationSearchTerms = getMoreStaticWorldTopSearchLocations();
    const worldTopLocationsCurrentWeathers = [];

    for (const locationName of topWorldStaticLocationSearchTerms) {
        worldTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return worldTopLocationsCurrentWeathers;
};

export const getAsiaTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAsianStaticLocationSearchTerms = getStaticAsianTopSearchLocations();
    const asianTopLocationsCurrentWeathers = [];

    for (const locationName of topAsianStaticLocationSearchTerms) {
        asianTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return asianTopLocationsCurrentWeathers;
};

export const getAsiaMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAsianStaticLocationSearchTerms = getMoreStaticAsianTopSearchLocations();
    const asianTopLocationsCurrentWeathers = [];

    for (const locationName of topAsianStaticLocationSearchTerms) {
        asianTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return asianTopLocationsCurrentWeathers;
};

export const getAmericasTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAmericasStaticLocationSearchTerms = getStaticAmericasTopSearchLocations();
    const americasTopLocationsCurrentWeathers = [];

    for (const locationName of topAmericasStaticLocationSearchTerms) {
        americasTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return americasTopLocationsCurrentWeathers;
};

export const getAmericasMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAmericasStaticLocationSearchTerms = getMoreStaticAmericasTopSearchLocations();
    const americasTopLocationsCurrentWeathers = [];

    for (const locationName of topAmericasStaticLocationSearchTerms) {
        americasTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return americasTopLocationsCurrentWeathers;
};

export const getAfricaTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAfricaStaticLocationSearchTerms = getStaticAfricaTopSearchLocations();
    const africaTopLocationsCurrentWeathers = [];

    for (const locationName of topAfricaStaticLocationSearchTerms) {
        africaTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return africaTopLocationsCurrentWeathers;
};

export const getAfricaMoreTopLocationsCurrentWeathers = async (): Promise<LocationCurrentWeather[]> => {
    const topAfricaStaticLocationSearchTerms = getMoreStaticAfricaTopSearchLocations();
    const africaTopLocationsCurrentWeathers = [];

    for (const locationName of topAfricaStaticLocationSearchTerms) {
        africaTopLocationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return africaTopLocationsCurrentWeathers;
};

export const getWeatherDetailsPageStaticMapProps = (): MapProps => {
    return {
        blackAndWhiteChecked: false,
        mapnikChecked: true,
        zoomLevel: WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL,
        width: WEATHER_DETAILS_PAGE_MAP_WIDTH,
        height: WEATHER_DETAILS_PAGE_MAP_HEIGHT,
        displayMarker: true,
        classNames: '-z-10',
        temperatureChecked: false,
        cloudsChecked: false,
        precipitationChecked: false,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: true,
        displayDetailedWeatherExpandMapController: true,
    };
};

export const getExpandedMapPageStaticMapProps = (): MapProps => {
    return {
        blackAndWhiteChecked: false,
        mapnikChecked: true,
        zoomLevel: WEATHER_DETAILS_PAGE_MAP_ZOOM_LEVEL,
        width: WEATHER_DETAILS_PAGE_MAP_WIDTH,
        height: WEATHER_DETAILS_PAGE_MAP_HEIGHT,
        displayMarker: true,
        classNames: '-z-10',
        temperatureChecked: false,
        cloudsChecked: false,
        precipitationChecked: false,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: true,
        displayDetailedWeatherExpandMapController: false,
    };
};

export const getHomePageStaticMapProps = (): MapProps => {
    return {
        blackAndWhiteChecked: false,
        mapnikChecked: true,
        zoomLevel: HOMEPAGE_MAP_ZOOM_LEVEL,
        width: HOMEPAGE_MAP_WIDTH,
        height: HOMEPAGE_MAP_HEIGHT,
        displayMarker: false,
        classNames: '-z-10 rounded-2xl shadow-lg',
        temperatureChecked: false,
        cloudsChecked: false,
        precipitationChecked: false,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: false,
        displayBasicMapExpandController: true,
    };
};

export const getExpandedHomePageStaticMapProps = (): MapProps => {
    return {
        blackAndWhiteChecked: false,
        mapnikChecked: true,
        zoomLevel: HOMEPAGE_MAP_ZOOM_LEVEL,
        width: HOMEPAGE_MAP_WIDTH,
        height: HOMEPAGE_MAP_HEIGHT,
        displayMarker: false,
        classNames: '-z-10 rounded-2xl shadow-lg',
        temperatureChecked: true,
        cloudsChecked: true,
        precipitationChecked: true,
        pressureChecked: false,
        windChecked: false,
        displayPositionResetController: false,
        displayBasicMapExpandController: false,
    };
};
