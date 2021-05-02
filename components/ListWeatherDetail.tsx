import * as React from 'react'

import {WeatherDetails} from '../interfaces'

type ListDetailProps = {
    item: WeatherDetails
}

const ListWeatherDetail = ({item: weatherDetails}: ListDetailProps) => (

    <div className="flex space-x-4">
        <div className="flex-1 p-4 max-w-xs">
            <h1 className="text-5xl p-1 text-center">{weatherDetails.locationName}</h1>
            <h2 className="text-2xl text-center capitalize p-1 hidden sm:block">{weatherDetails.current.weather.description}</h2>
            <h1 className="text-8xl p-1 text-center">{weatherDetails.current.currentTemp}</h1>
            <h2 className="text-xl text-center">High : {weatherDetails.current.maxTemp} Low : {weatherDetails.current.minTemp}</h2>
        </div>
        <div className="text-l flex-1 p-4">
            {/*TODO : Add stuff here*/}
        </div>
    </div>
)

export default ListWeatherDetail
