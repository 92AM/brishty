import React from 'react';
import { LocationCurrentWeather } from '../../interfaces';
import PageContentWrapper from '../../components/PageContentWrapper';
import TopLocationsWeatherPreviews from '../../components/TopLocationsWeatherPreviews';
import Layout from '../../components/Layout';
import { getUkMoreTopLocationsCurrentWeathers } from '../../services/BulkWeatherLocationExtractionService';

type UkWeatherProps = {
    ukTopLocationsWeathers: LocationCurrentWeather[];
};

const UkWeather = ({ ukTopLocationsWeathers }: UkWeatherProps) => {
    const searchTerms = 'UK Weather, England weather, Scotland weather, Wales weather, Northern Ireland weather';
    return (
        <Layout title="Brishty - search for weather" searchTerm={searchTerms}>
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-24 pb-20 min-h-screen'}>
                <span className="block pt-3 text-center text-2xl text-gray-800">Top UK forecasts</span>
                {ukTopLocationsWeathers && <TopLocationsWeatherPreviews items={ukTopLocationsWeathers} />}
            </PageContentWrapper>
        </Layout>
    );
};

UkWeather.getInitialProps = async () => {
    return {
        ukTopLocationsWeathers: await getUkMoreTopLocationsCurrentWeathers(),
    };
};

export default UkWeather;
