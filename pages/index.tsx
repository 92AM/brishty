import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import SearchBox from '../components/SearchBox';
import { Coordinate, LocationCurrentWeather, MainLocationForMap, News } from '../interfaces';
import TopLocationsWeatherPreviewsCarousel from '../components/TopLocationsWeatherPreviewsCarousel';
import { MapLoader } from '../components/MapLoader';
import { setPageModel } from '../services/PageModelService';
import { getWorldNews } from '../services/WorldNewsService';
import WorldNews from '../components/WorldNews';
import { getHomePageStaticMapProps } from '../services/StaticMapPropsProviderService';
import {
    getEuropeTopLocationsCurrentWeathers,
    getUkTopLocationsCurrentWeathers,
    getWorldTopLocationsCurrentWeathers,
} from '../services/BulkWeatherLocationExtractionService';
import { GoogleAdComponent } from '../components/GoogleAdComponent';
import { CookieModal } from '../components/CookieModal';

type IndexPageProps = {
    ukTopLocationsWeathers: LocationCurrentWeather[];
    europeTopLocationsWeathers: LocationCurrentWeather[];
    worldTopLocationWeathers: LocationCurrentWeather[];
    worldNews: News[];
};

const HomePageWeatherMap = () => {
    const mainLocationForMap: MainLocationForMap = {
        coordinate: { latitude: '51.5074', longitude: '0.1278' } as Coordinate,
        locationName: '',
        temperature: '',
    };
    return (
        <div className="pb-8">
            <div className="pb-4">
                <div className="text-black p-2 pt-10 text-3xl text-center">World Weather Map</div>
            </div>
            <div className={'p-2 z-0 relative'}>
                <MapLoader mapProps={getHomePageStaticMapProps()} mainLocationForMap={mainLocationForMap} />
            </div>
        </div>
    );
};

const IndexPage = ({
    ukTopLocationsWeathers,
    europeTopLocationsWeathers,
    worldTopLocationWeathers,
    worldNews,
}: IndexPageProps) => {
    useEffect(() => {
        setPageModel([ukTopLocationsWeathers, europeTopLocationsWeathers, worldTopLocationWeathers, worldNews]);
    }, []);

    return (
        <Layout title="Brishty - search for weather">
            <SearchBox />
            <PageContentWrapper classNameCustomAttributes={'py-6'}>
                <HomePageWeatherMap />
            </PageContentWrapper>
            <GoogleAdComponent />
            <PageContentWrapper classNameCustomAttributes={'py-6'}>
                {ukTopLocationsWeathers && (
                    <TopLocationsWeatherPreviewsCarousel items={ukTopLocationsWeathers} mainLocation={'UK'} />
                )}
                {europeTopLocationsWeathers && (
                    <TopLocationsWeatherPreviewsCarousel items={europeTopLocationsWeathers} mainLocation={'Europe'} />
                )}
                {worldTopLocationWeathers && (
                    <TopLocationsWeatherPreviewsCarousel items={worldTopLocationWeathers} mainLocation={'World'} />
                )}
                {worldNews && <WorldNews items={worldNews} />}
            </PageContentWrapper>
            <CookieModal />
        </Layout>
    );
};

IndexPage.getInitialProps = async () => {
    try {
        return {
            ukTopLocationsWeathers: await getUkTopLocationsCurrentWeathers(),
            europeTopLocationsWeathers: await getEuropeTopLocationsCurrentWeathers(),
            worldTopLocationWeathers: await getWorldTopLocationsCurrentWeathers(),
            worldNews: await getWorldNews(),
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};

export default IndexPage;
