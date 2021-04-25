import {WeatherDetails} from '../../interfaces'
import Layout from '../../components/Layout'
import React from "react";

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
    const city = 'london';
    const apiKey = 'a72e7f363e829766f8e4e1103e65a3be';
    const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const locationAsJson = await location.json()
    const coordinates = locationAsJson.coord;
    const weatherDetailForCity = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`
    )
    const weatherDetailForCityAsJson = await weatherDetailForCity.json()
    return {item: JSON.stringify(weatherDetailForCityAsJson)}
}

export default Weather
