import React from 'react';
import { LocationCurrentWeather } from '../../interfaces';
import PageContentWrapper from '../../components/PageContentWrapper';
import TopLocationsWeatherPreviews from '../../components/TopLocationsWeatherPreviews';
import Layout from '../../components/Layout';
import { getEuropeMoreTopLocationsCurrentWeathers } from '../../services/WeatherDetailsService';

type EuropeWeatherProps = {
    europeTopLocationsWeathers: LocationCurrentWeather[];
};

const EuropeWeather = ({ europeTopLocationsWeathers }: EuropeWeatherProps) => {
    const searchTerms = "Europe Weather, european weather"
    return (
        <Layout title="Brishty - search for weather" searchTerm={searchTerms}>
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-24 pb-20 min-h-screen'}>
                <span className="block pt-3 text-center text-2xl text-gray-800">Top Europe forecasts</span>
                {europeTopLocationsWeathers && <TopLocationsWeatherPreviews items={europeTopLocationsWeathers} />}
            </PageContentWrapper>
        </Layout>
    );
};

EuropeWeather.getInitialProps = async () => {
    return {
        europeTopLocationsWeathers: await getEuropeMoreTopLocationsCurrentWeathers(),
    };
};

export default EuropeWeather;
