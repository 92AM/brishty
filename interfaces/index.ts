export interface Current {
    currentTemp: string
    maxTemp: string
    minTemp: string
    weather: Weather
}

export interface Weather {
    main: string
    description: string
}

export interface WeatherDetails {
    locationName: string
    latitude: string
    longitude: string
    timezone: string
    current: Current

    // TODO : To be removed eventually ...
    fullRawWeatherData: string
}
