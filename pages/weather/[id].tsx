import {GetStaticPaths, GetStaticProps} from 'next'

import React from "react";
import {handleLocationDetailsRoute} from "../../webRouter/handleLocationDetailsRoute";
import {handleWeatherDetailsRoute} from "../../webRouter/handleWeatherDetailsRoute";
import {WeatherDetails} from "../../interfaces";
import Layout from "../../components/Layout";
import ListWeatherDetail from "../../components/ListWeatherDetail";

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
        const locationDetailsAsJson = await handleLocationDetailsRoute(locationName);
        const searchedLocationCoordinates = locationDetailsAsJson.coord;
        const weatherDetailForGivenLocationAsJson = await handleWeatherDetailsRoute(
            searchedLocationCoordinates.lat,
            searchedLocationCoordinates.lon
        );

        const weatherDetails = {
            name: locationName,
            fullRawWeatherData: JSON.stringify(weatherDetailForGivenLocationAsJson),
        } as WeatherDetails;

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
            title={`Brishty - Weather detail for ${
                weatherDetails && weatherDetails.name
            }`}
        >
            {weatherDetails && <ListWeatherDetail item={weatherDetails}/>}
        </Layout>
    )
}

export default WeatherDetail
