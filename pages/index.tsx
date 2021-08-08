import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import SearchBox from '../components/SearchBox';
import { LocationCurrentWeather } from '../interfaces';
import {
    getEuropeTopLocationsCurrentWeathers,
    getHomePageStaticMapProps,
    getUkTopLocationsCurrentWeathers,
    getWorldTopLocationsCurrentWeathers,
} from '../services/WeatherDetailsService';
import TopLocationsWeatherPreviewsCarousel from '../components/TopLocationsWeatherPreviewsCarousel';
import { MapLoader } from '../components/MapLoader';
import { setPageModel } from '../services/PageModelService';

type IndexPageProps = {
    ukTopLocationsWeathers: LocationCurrentWeather[];
    europeTopLocationsWeathers: LocationCurrentWeather[];
    worldTopLocationWeathers: LocationCurrentWeather[];
};

const HomePageWeatherMap = () => {
    return (
        <div className="pb-8">
            <div className="pb-4">
                <div className="text-black p-2 text-2xl text-center">World Weather Map</div>
            </div>
            <div className={'p-2 z-0 relative'}>
                <MapLoader mapProps={getHomePageStaticMapProps()} />
            </div>
        </div>
    );
};

const IndexPage = ({
    ukTopLocationsWeathers,
    europeTopLocationsWeathers,
    worldTopLocationWeathers,
}: IndexPageProps) => {
    useEffect(() => {
        setPageModel([ukTopLocationsWeathers, europeTopLocationsWeathers, worldTopLocationWeathers]);
    }, []);

    return (
        <Layout title="Brishty - search for weather">
            <SearchBox />
            <PageContentWrapper classNameCustomAttributes={'py-6'}>
                <HomePageWeatherMap />
                {ukTopLocationsWeathers && (
                    <TopLocationsWeatherPreviewsCarousel items={ukTopLocationsWeathers} mainLocation={'UK'} />
                )}
                {europeTopLocationsWeathers && (
                    <TopLocationsWeatherPreviewsCarousel items={europeTopLocationsWeathers} mainLocation={'Europe'} />
                )}
                {worldTopLocationWeathers && (
                    <TopLocationsWeatherPreviewsCarousel items={worldTopLocationWeathers} mainLocation={'World'} />
                )}
            </PageContentWrapper>
        </Layout>
    );
};

IndexPage.getInitialProps = async () => {
    return {
        ukTopLocationsWeathers: await getUkTopLocationsCurrentWeathers(),
        europeTopLocationsWeathers: await getEuropeTopLocationsCurrentWeathers(),
        worldTopLocationWeathers: await getWorldTopLocationsCurrentWeathers(),
    };
};

export default IndexPage;
