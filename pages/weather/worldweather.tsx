import React from 'react';
import { LocationCurrentWeather } from '../../interfaces';
import PageContentWrapper from '../../components/PageContentWrapper';
import TopLocationsWeatherPreviews from '../../components/TopLocationsWeatherPreviews';
import Layout from '../../components/Layout';
import { getCurrentWeatherOfLocations } from '../../services/WeatherDetailsService';
import { MORE_WORLD_TOP_SEARCH_LOCATIONS } from '../../utility/StaticLocationsFactory';
import { CookieModalLoader } from '../../components/CookieModalLoader';

type WorldWeatherProps = {
    worldTopLocationsWeathers: LocationCurrentWeather[];
};

const WorldWeather = ({ worldTopLocationsWeathers }: WorldWeatherProps) => {
    const searchTerms = 'World Weather';
    return (
        <Layout title="Brishty - search for weather" searchTerm={searchTerms}>
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-24 pb-20 min-h-screen'}>
                <span className="block pt-3 text-center text-2xl text-gray-800">Rest of the world forecasts</span>
                {worldTopLocationsWeathers && <TopLocationsWeatherPreviews items={worldTopLocationsWeathers} />}
            </PageContentWrapper>
            <CookieModalLoader />
        </Layout>
    );
};

WorldWeather.getInitialProps = async () => {
    return {
        worldTopLocationsWeathers: await getCurrentWeatherOfLocations(MORE_WORLD_TOP_SEARCH_LOCATIONS),
    };
};

export default WorldWeather;
