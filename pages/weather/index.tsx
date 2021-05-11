import {WeatherDetails} from '../../interfaces'
import Layout from '../../components/Layout'
import React from "react";
import {locationDetailsRouteHandler} from "../../webRouters/LocationDetailsRouteHandler";
import {weatherDetailsRouteHandler} from "../../webRouters/WeatherDetailsRouteHandler";

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
    const locationDetailsAsJson = await locationDetailsRouteHandler(locationName);
    const searchedLocationCoordinates = locationDetailsAsJson.coord;
    const weatherDetailForGivenLocationAsJson = await weatherDetailsRouteHandler(
        searchedLocationCoordinates.lat,
        searchedLocationCoordinates.lon
    );

    return {item: JSON.stringify(weatherDetailForGivenLocationAsJson)}
}

export default Weather
