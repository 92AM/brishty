import {LocationCurrentWeather} from '../../interfaces'
import Layout from '../../components/Layout'
import React from "react";
import {getLocationCurrentWeather} from "../../services/WeatherDetailsService";
import PageContentWrapper from "../../components/PageContentWrapper";

type Props = {
    item: LocationCurrentWeather
}

const Weather = ({item}: Props) => (
    <Layout title="Brishty - Weather For London">
        <PageContentWrapper>
            <h1>Weather</h1>
            <p>{JSON.stringify(item)}</p>
        </PageContentWrapper>
    </Layout>
)

Weather.getInitialProps = async () => {

    const locationName = 'london'
    const currentWeatherForLocation = await getLocationCurrentWeather(locationName);
    console.log("Current weather for a location : ", currentWeatherForLocation);
    return {item: currentWeatherForLocation};
}

// Weather.getInitialProps = async () => {
//
//     const locationName = 'manchester'
//     return await getLocationCurrentWeather(locationName);
// }

export default Weather
