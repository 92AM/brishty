export interface Current {
    currentTemp: string
    maxTemp: string
    minTemp: string
    weather: Weather
    dateTime: string
    sunrise: string
    sunset: string
    feelsLike: string
    pressure: string
    humidity: string
    uvIndex: string
    visibility: string
    windSpeed: string
    windDegree: string
    cloudiness: string
}

export interface Weather {
    main: string
    description: string
    icon: string
}

export interface Temperature {
    min: string
    max: string
    day: string
    night: string
    evening: string
    morning: string
}

export interface FeelLike {
    day: string
    night: string
    evening: string
    morning: string
}

export interface Hour {
    dateTime: string
    weather: Weather
    temperature: string
    probabilityOfPrecipitation: string
}

export interface Daily {
    dateTime: string
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    weather: Weather
    temperature: Temperature
    feelsLike: FeelLike
    probabilityOfPrecipitation: string
    uvIndex: string
    windDegree: string
    windSpeed: string
    cloudiness: string
    pressure: string
    humidity: string
}

export interface Coordinate {
    latitude: string
    longitude: string
}

export interface LocationCurrentWeather {
    coordinate: Coordinate
    weather: Weather
    temperature: string
    feelsLike : string
    minTemp : string
    maxTemp : string
    locationName : string
    countryCode: string
    imageLink : string
}

export interface NearbyLocation {
    type: string
    name : string
    country : string
    countryCode: string
    region: string
    regionCode: string
    distance: string
    coordinate: Coordinate
}

export interface WeatherDetails {
    locationName: string
    latitude: string
    longitude: string
    timezone: string
    current: Current
    hourly: Hour[]
    daily: Daily[]
    nearbyLocations: NearbyLocation[]
}

export type WeatherDetailsProps = {
    weatherDetails: WeatherDetails
    errors?: string
}