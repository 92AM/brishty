import * as React from 'react'

import {WeatherDetails} from '../interfaces'

type ListDetailProps = {
    item: WeatherDetails
}

const ListWeatherDetail = ({item: location}: ListDetailProps) => (
    <div>
        <h1>Detail for location : {location.name}</h1>
        <p><h2>Returned by Open Weather API :</h2>
            <p/>
            {location.fullRawWeatherData}
        </p>
    </div>
)

export default ListWeatherDetail
