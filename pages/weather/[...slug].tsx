import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import { WeatherDetails } from '../../interfaces';
import { getWeatherDetailsByGeoLocation } from '../../services/WeatherDetailsService';
import { ParsedUrlQuery } from 'querystring';
import WeatherLocationDetails from '../../components/WeatherLocationDetails';
import { setPageModel } from '../../services/PageModelService';

type Props = {
    weatherDetails: WeatherDetails;
    errors?: string;
};

interface UrlParams extends ParsedUrlQuery {
    slug: string[];
}

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { slug } = params as UrlParams;
        const locationName = slug[0];
        const latitude = slug[1];
        const longitude = slug[2];
        const countryCode = slug[3];
        const weatherDetails = await getWeatherDetailsByGeoLocation(locationName, latitude, longitude, countryCode);
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
