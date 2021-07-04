import {GetStaticPaths, GetStaticProps} from 'next'

import React from "react";
import {WeatherDetails} from "../../interfaces";
import Layout from "../../components/Layout";
import BasicCurrentlyAndHourlyWeather from "../../components/BasicCurrentlyAndHourlyWeather";
import {getWeatherDetailsWithLocationName} from "../../services/WeatherDetailsService";
import PageContentWrapper from "../../components/PageContentWrapper";
import DetailedCurrentWeather from "../../components/DetailedCurrentWeather";
import SevenDayWeather from "../../components/SevenDayWeather";

type Props = {
    weatherDetails?: WeatherDetails
    errors?: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {paths: [], fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
        const locationName = params?.id
        const weatherDetails = await getWeatherDetailsWithLocationName(locationName);

        return {
            props: {
                weatherDetails
            },
            revalidate: 60
        }
    } catch (err) {
        return {
            notFound: true
        }
    }
}

const Weather = ({weatherDetails}: Props) => {
    return (
        <Layout
            title={`Brishty - ${
                weatherDetails && weatherDetails.locationName
            } weather`}
        >
            <PageContentWrapper>
                {weatherDetails && <BasicCurrentlyAndHourlyWeather item={weatherDetails}/>}
            </PageContentWrapper>
            {weatherDetails && <DetailedCurrentWeather item={weatherDetails}/>}
            <PageContentWrapper classNameCustomAttributes={"py-8 px-2"}>
                {weatherDetails && <SevenDayWeather item={weatherDetails.daily}/>}
            </PageContentWrapper>
        </Layout>
    )
}

export default Weather
