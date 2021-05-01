export interface Current {
    // dateTime: string
    // sunrise: string
    // sunset: string
    // temp: number
    // feelsLike: number
    // pressure: number
    // humidity: number
    // uvi: number
    // clouds: number
    // visibility: number
    // windSpeed: number
    // windDegree: number
    weather: Weather
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface WeatherDetails {
    locationName: string
    fullRawWeatherData: string

    // TODO : Keep fullRawWeatherData but expand it in future and introduce new data models as required.

    latitude: string
    longitude: string
    timezone: string

    current: Current

}
