import * as React from 'react'

import {WeatherDetails} from '../interfaces'

type ListDetailProps = {
    item: WeatherDetails
}

const ListWeatherDetail = ({item: weatherDetails}: ListDetailProps) => (
    <div>
        <h1>Detail for location : {weatherDetails.locationName}</h1>
        {/*<p><h2>Returned by Open Weather API :</h2>*/}
        {/*    <p/>*/}
        {/*    {weatherDetails.fullRawWeatherData}*/}
        {/*</p>*/}
        <p><h2>Latitude :</h2>
            <p/>
            {weatherDetails.latitude}
        </p>
        <p><h2>Longitude :</h2>
            <p/>
            {weatherDetails.longitude}
        </p>
        <p><h2>Timezone :</h2>
            <p/>
            {weatherDetails.timezone}
        </p>
    </div>
)

export default ListWeatherDetail
