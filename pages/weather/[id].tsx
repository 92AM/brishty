import {GetStaticPaths, GetStaticProps} from 'next'

import React from "react";
import {WeatherDetails} from "../../interfaces";
import Layout from "../../components/Layout";
import LocationWeatherDetail from "../../components/LocationWeatherDetail";
import {getWeatherDetails} from "../../services/WeatherDetailsService";
import PageContent from "../../components/PageContent";

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
        const weatherDetails = await getWeatherDetails(locationName);

        return {
            props: {
                weatherDetails
            },
            revalidate: 60
        }
    } catch (err) {
        return {notFound: true}
    }
}

const WeatherDetail = ({weatherDetails}: Props) => {
    return (
        <Layout
            title={`Brishty - ${
                weatherDetails && weatherDetails.locationName
            } weather`}
        >
            <PageContent>
                {weatherDetails && <LocationWeatherDetail item={weatherDetails}/>}
            </PageContent>
        </Layout>
    )
}

export default WeatherDetail
