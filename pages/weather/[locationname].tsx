import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import { WeatherDetails } from '../../interfaces';
import { getWeatherDetailsByLocationName } from '../../services/WeatherDetailsService';
import WeatherLocationDetails from '../../components/WeatherLocationDetails';
import { setPageModel } from '../../services/PageModelService';
import { parseSearchedLocationNameOrDefault } from '../../services/GenericUtilityService';

type Props = {
    weatherDetails: WeatherDetails;
    errors?: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        console.log('Parameter passed in weather : ', params);
        const locationName = parseSearchedLocationNameOrDefault(params?.locationname as string);
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
