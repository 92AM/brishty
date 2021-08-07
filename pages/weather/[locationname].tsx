import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import { WeatherDetails } from '../../interfaces';
import { getWeatherDetailsByLocationName } from '../../services/WeatherDetailsService';
import WeatherLocationDetails from '../../components/WeatherLocationDetails';
import { setPageModel } from '../../services/PageModelService';

type Props = {
    weatherDetails: WeatherDetails;
    errors?: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const locationName = params?.locationname;
        const weatherDetails = await getWeatherDetailsByLocationName(locationName);

        return {
            props: {
                weatherDetails,
            },
            revalidate: 60,
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};

const Weather = ({ weatherDetails }: Props) => {
    useEffect(() => {
        setPageModel(weatherDetails);
    }, []);

    return <WeatherLocationDetails weatherDetails={weatherDetails} />;
};

export default Weather;
