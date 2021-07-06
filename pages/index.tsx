import Layout from '../components/Layout'
import React from "react";
import PageContentWrapper from "../components/PageContentWrapper";
import SearchBox from "../components/SearchBox";
import {LocationCurrentWeather} from "../interfaces";
import {
    getEuropeTopLocationsCurrentWeathers,
    getUkTopLocationsCurrentWeathers,
    getWorldTopLocationsCurrentWeathers
} from "../services/WeatherDetailsService";
import TopLocationsWeatherPreviewsCarousel from "../components/TopLocationsWeatherPreviewsCarousel";

type IndexPageProps = {
    ukTopLocationsWeathers: LocationCurrentWeather[]
    europeTopLocationsWeathers: LocationCurrentWeather[]
    worldTopLocationWeathers: LocationCurrentWeather[]
}

const IndexPage = (
    {
        ukTopLocationsWeathers,
        europeTopLocationsWeathers,
        worldTopLocationWeathers,
    }: IndexPageProps
) => (
    <Layout title="Brishty - search for weather">
        <SearchBox/>
        <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
            {ukTopLocationsWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={ukTopLocationsWeathers} mainLocation={"UK"}/>}
            {europeTopLocationsWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={europeTopLocationsWeathers} mainLocation={"Europe"}/>}
            {worldTopLocationWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={worldTopLocationWeathers} mainLocation={"World"}/>}
        </PageContentWrapper>
    </Layout>
)

IndexPage.getInitialProps = async () => {
    return {
        ukTopLocationsWeathers: await getUkTopLocationsCurrentWeathers(),
        europeTopLocationsWeathers: await getEuropeTopLocationsCurrentWeathers(),
        worldTopLocationWeathers: await getWorldTopLocationsCurrentWeathers(),
    };
}

export default IndexPage
