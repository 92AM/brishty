import React from "react";
import {LocationCurrentWeather} from "../../interfaces";
import PageContentWrapper from "../../components/PageContentWrapper";
import TopLocationsWeatherPreviews from "../../components/TopLocationsWeatherPreviews";
import Layout from "../../components/Layout";
import {getWorldTopLocationsCurrentWeathers} from "../../services/WeatherDetailsService";

type UkWeatherProps = {
    worldTopLocationsWeathers: LocationCurrentWeather[]
}

const WorldWeather = ({worldTopLocationsWeathers}: UkWeatherProps) => {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={"px-4 pt-24 pb-20 min-h-screen"}>
                <span className="block pt-3 text-center text-2xl text-gray-800">Top World forecasts</span>
                {worldTopLocationsWeathers && <TopLocationsWeatherPreviews items={worldTopLocationsWeathers}/>}
            </PageContentWrapper>
        </Layout>
    );
}

WorldWeather.getInitialProps = async () => {
    return {
        worldTopLocationsWeathers: await getWorldTopLocationsCurrentWeathers(),
    };
}

export default WorldWeather