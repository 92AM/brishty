import Layout from '../components/Layout'
import React from "react";
import PageContentWrapper from "../components/PageContentWrapper";
import SearchBox from "../components/SearchBox";
import {LocationCurrentWeather} from "../interfaces";
import {
    getAfricaTopLocationsCurrentWeathers,
    getAmericasTopLocationsCurrentWeathers,
    getAsiaTopLocationsCurrentWeathers,
    getEuropeTopLocationsCurrentWeathers,
    getUkTopLocationsCurrentWeathers
} from "../services/WeatherDetailsService";
import TopLocationsWeatherPreviewsCarousel from "../components/TopLocationsWeatherPreviewsCarousel";

type IndexPageProps = {
    ukTopLocationsWeathers: LocationCurrentWeather[]
    europeTopLocationsWeathers: LocationCurrentWeather[]
    asiaTopLocationWeathers: LocationCurrentWeather[]
    americasTopLocationWeathers: LocationCurrentWeather[]
    africaTopLocationWeathers: LocationCurrentWeather[]
}

const IndexPage = (
    {
        ukTopLocationsWeathers,
        europeTopLocationsWeathers,
        asiaTopLocationWeathers,
        americasTopLocationWeathers,
        africaTopLocationWeathers
    }: IndexPageProps
) => (
    <Layout title="Brishty - search for weather">
        <SearchBox/>
        <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
            {ukTopLocationsWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={ukTopLocationsWeathers} mainLocation={"UK"}/>}
            {europeTopLocationsWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={europeTopLocationsWeathers} mainLocation={"Europe"}/>}
            {asiaTopLocationWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={asiaTopLocationWeathers} mainLocation={"Asia"}/>}
            {americasTopLocationWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={americasTopLocationWeathers} mainLocation={"Americas"}/>}
            {africaTopLocationWeathers &&
            <TopLocationsWeatherPreviewsCarousel items={africaTopLocationWeathers} mainLocation={"Africa"}/>}
        </PageContentWrapper>
    </Layout>
)

IndexPage.getInitialProps = async () => {
    return {
        ukTopLocationsWeathers: await getUkTopLocationsCurrentWeathers(),
        europeTopLocationsWeathers: await getEuropeTopLocationsCurrentWeathers(),
        asiaTopLocationWeathers: await getAsiaTopLocationsCurrentWeathers(),
        americasTopLocationWeathers: await getAmericasTopLocationsCurrentWeathers(),
        africaTopLocationWeathers: await getAfricaTopLocationsCurrentWeathers(),
    };
}

export default IndexPage
