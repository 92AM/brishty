import React from 'react';
import { LocationCurrentWeather } from '../../interfaces';
import PageContentWrapper from '../../components/PageContentWrapper';
import TopLocationsWeatherPreviews from '../../components/TopLocationsWeatherPreviews';
import Layout from '../../components/Layout';
import { getWorldMoreTopLocationsCurrentWeathers } from '../../services/BulkWeatherLocationExtractionService';

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
        </Layout>
    );
};

WorldWeather.getInitialProps = async () => {
    return {
        worldTopLocationsWeathers: await getWorldMoreTopLocationsCurrentWeathers(),
    };
};

export default WorldWeather;
