import Layout from '../components/Layout'
import React from "react";
import PageContentWrapper from "../components/PageContentWrapper";
import SearchBox from "../components/SearchBox";
import {LocationCurrentWeather} from "../interfaces";
import {getUkTopLocationsCurrentWeathers, getWorldTopLocationsCurrentWeathers} from "../services/WeatherDetailsService";
import TopLocationsWeatherPreviews from "../components/TopLocationsWeatherPreviews";

type IndexPageProps = {
    ukTopLocationsWeathers: LocationCurrentWeather[]
    worldTopLocationsWeathers: LocationCurrentWeather[]
}

const IndexPage = ({ukTopLocationsWeathers, worldTopLocationsWeathers}: IndexPageProps) => (
    <Layout title="Brishty - search for weather">
        <SearchBox/>
        <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
            <span className="block pt-3 text-center text-2xl text-gray-800">Top UK forecasts</span>
            {ukTopLocationsWeathers && <TopLocationsWeatherPreviews items={ukTopLocationsWeathers}/>}
            <span className="block pt-3 text-center text-2xl text-gray-800">Top World forecasts</span>
            {worldTopLocationsWeathers && <TopLocationsWeatherPreviews items={worldTopLocationsWeathers}/>}
        </PageContentWrapper>
    </Layout>
)

IndexPage.getInitialProps = async () => {
    return {
        ukTopLocationsWeathers: getUkTopLocationsCurrentWeathers(),
        worldTopLocationsWeathers: getWorldTopLocationsCurrentWeathers(),
    };
}

export default IndexPage
