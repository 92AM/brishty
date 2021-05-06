export interface Current {
    currentTemp: string
    maxTemp: string
    minTemp: string
    weather: Weather
}

export interface Weather {
    main: string
    description: string
    icon: string
}

export interface Hour {
    dateTime: string
    weather: Weather
    temp: string
}

export interface WeatherDetails {
    locationName: string
    latitude: string
    longitude: string
    timezone: string
    current: Current
    hourly: Hour[]

    // TODO : To be removed eventually ...
    fullRawWeatherData: string
}