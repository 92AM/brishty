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
import { HOME_PAGE_STATIC_MAP_PROPS } from '../utility/StaticMapPropsFactory';
import { GoogleAdComponent } from '../components/GoogleAdComponent';
import {
    EUROPEAN_TOP_SEARCH_LOCATIONS,
    REST_OF_WORLD_TOP_SEARCH_LOCATIONS,
    UK_TOP_SEARCH_LOCATIONS,
} from '../utility/StaticLocationsFactory';
import { getCurrentWeatherOfLocations } from '../services/WeatherDetailsService';
import { CookieModalLoader } from '../components/CookieModalLoader';

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
                <MapLoader mapProps={HOME_PAGE_STATIC_MAP_PROPS} mainLocationForMap={mainLocationForMap} />
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
            <div className={'pb-8'}>
                <GoogleAdComponent />
            </div>
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
            <CookieModalLoader />
        </Layout>
    );
};

IndexPage.getInitialProps = async () => {
    try {
        return {
            ukTopLocationsWeathers: await getCurrentWeatherOfLocations(UK_TOP_SEARCH_LOCATIONS),
            europeTopLocationsWeathers: await getCurrentWeatherOfLocations(EUROPEAN_TOP_SEARCH_LOCATIONS),
            worldTopLocationWeathers: await getCurrentWeatherOfLocations(REST_OF_WORLD_TOP_SEARCH_LOCATIONS),
            worldNews: await getWorldNews(),
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};

export default IndexPage;
