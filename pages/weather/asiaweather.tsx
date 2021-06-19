import React from "react";
import {LocationCurrentWeather} from "../../interfaces";
import PageContentWrapper from "../../components/PageContentWrapper";
import TopLocationsWeatherPreviews from "../../components/TopLocationsWeatherPreviews";
import Layout from "../../components/Layout";
import {getAsiaMoreTopLocationsCurrentWeathers} from "../../services/WeatherDetailsService";

type AsiaWeatherProps = {
    asiaTopLocationsWeathers: LocationCurrentWeather[]
}

const AsiaWeather = ({asiaTopLocationsWeathers}: AsiaWeatherProps) => {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={"px-4 pt-24 pb-20 min-h-screen"}>
                <span className="block pt-3 text-center text-2xl text-gray-800">Top Asia forecasts</span>
                {asiaTopLocationsWeathers && <TopLocationsWeatherPreviews items={asiaTopLocationsWeathers}/>}
            </PageContentWrapper>
        </Layout>
    );
}

AsiaWeather.getInitialProps = async () => {
    return {
        asiaTopLocationsWeathers: await getAsiaMoreTopLocationsCurrentWeathers(),
    };
}

export default AsiaWeather