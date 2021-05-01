import {WeatherDetails} from '../../interfaces'
import Layout from '../../components/Layout'
import React from "react";
import {handleLocationDetailsRoute} from "../../webRouters/handleLocationDetailsRoute";
import {handleWeatherDetailsRoute} from "../../webRouters/handleWeatherDetailsRoute";

type Props = {
    item: WeatherDetails
}

const Weather = ({item}: Props) => (
    <Layout title="Brishty - Weather For London">
        <h1>Weather For London</h1>
        <p>{item}</p>
    </Layout>
)

Weather.getInitialProps = async () => {

    const locationName = 'london'
    const locationDetailsAsJson = await handleLocationDetailsRoute(locationName);
    const searchedLocationCoordinates = locationDetailsAsJson.coord;
    const weatherDetailForGivenLocationAsJson = await handleWeatherDetailsRoute(
        searchedLocationCoordinates.lat,
        searchedLocationCoordinates.lon
    );

    return {item: JSON.stringify(weatherDetailForGivenLocationAsJson)}
}

export default Weather
