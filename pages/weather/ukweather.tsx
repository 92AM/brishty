import React from 'react';
import { LocationCurrentWeather } from '../../interfaces';
import PageContentWrapper from '../../components/PageContentWrapper';
import TopLocationsWeatherPreviews from '../../components/TopLocationsWeatherPreviews';
import Layout from '../../components/Layout';
import { getCurrentWeatherOfLocations } from '../../services/WeatherDetailsService';
import { MORE_UK_TOP_SEARCH_LOCATIONS } from '../../services/StaticLocationsFactory';
import { CookieModalLoader } from '../../components/CookieModalLoader';

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
            <CookieModalLoader />
        </Layout>
    );
};

UkWeather.getInitialProps = async () => {
    return {
        ukTopLocationsWeathers: await getCurrentWeatherOfLocations(MORE_UK_TOP_SEARCH_LOCATIONS),
    };
};

export default UkWeather;
