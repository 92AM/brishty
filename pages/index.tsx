import Layout from '../components/Layout'
import React from "react";
import PageContentWrapper from "../components/PageContentWrapper";
import SearchBox from "../components/SearchBox";
import {LocationCurrentWeather} from "../interfaces";
import {getLocationCurrentWeather} from "../services/WeatherDetailsService";
import {getStaticUkTopSearchLocations} from "../services/StaticSearchLocationGeneratorService";
import UkTopLocationsWeatherPreviews from "../components/UkTopLocationsWeatherPreviews";


type IndexPageProps = {
    ukTopLocationsWeather: LocationCurrentWeather[]
}

const IndexPage = ({ukTopLocationsWeather}: IndexPageProps) => (
    <Layout title="Brishty - search for weather">
        <SearchBox/>
        <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
            <span className="block pt-3 text-center text-2xl text-gray-800">Top UK forecasts</span>
            {ukTopLocationsWeather && <UkTopLocationsWeatherPreviews items={ukTopLocationsWeather}/>}
        </PageContentWrapper>
    </Layout>
)

IndexPage.getInitialProps = async () => {
    const staticLocationSearchTerms = getStaticUkTopSearchLocations();
    let locationsCurrentWeathers = [];

    for (let locationName of staticLocationSearchTerms) {
        locationsCurrentWeathers.push(await getLocationCurrentWeather(locationName));
    }
    return {ukTopLocationsWeather: locationsCurrentWeathers};
}

export default IndexPage
