import React from "react";
import {LocationCurrentWeather} from "../../interfaces";
import PageContentWrapper from "../../components/PageContentWrapper";
import TopLocationsWeatherPreviews from "../../components/TopLocationsWeatherPreviews";
import Layout from "../../components/Layout";
import {getUkTopLocationsCurrentWeathers} from "../../services/WeatherDetailsService";

type UkWeatherProps = {
    ukTopLocationsWeathers: LocationCurrentWeather[]
}

const UkWeather = ({ukTopLocationsWeathers}: UkWeatherProps) => {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={"px-4 pt-24 pb-20 min-h-screen"}>
                <span className="block pt-3 text-center text-2xl text-gray-800">Top UK forecasts</span>
                {ukTopLocationsWeathers && <TopLocationsWeatherPreviews items={ukTopLocationsWeathers}/>}
            </PageContentWrapper>
        </Layout>
    );
}

UkWeather.getInitialProps = async () => {
    return {
        ukTopLocationsWeathers: await getUkTopLocationsCurrentWeathers(),
    };
}

export default UkWeather