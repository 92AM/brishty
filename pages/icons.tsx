import React from 'react';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import Link from 'next/link';

type Props = {
    description: string;
    value: string;
};

const Icon = ({ description, value }: Props) => {
    return (
        <div className="flex justify-center py-6">
            <img className="h-24 w-24 pt-2" src={value} alt={value} />
            <span className="pt-10 py-2 text-gray-800 text-lg">{description}</span>
        </div>
    );
};

const getIconSourceLink = (value: string): string => {
    return 'https://openweathermap.org/img/wn/' + value + '@2x.png';
};

export default function Icons() {
    return (
        <Layout title="Brishty - search for weather" background={'bg-white'}>
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 min-h-screen'} addDefaultAttributes={false}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-4xl">Icons</span>
                    <span className="text-xl">
                        Below are the list of weather icons used in Brishty, these icons are all sourced by Open Weather
                        Map. For more information please visit the below link.
                    </span>
                    <span className="text-blue-900 hover:underline text-xl">
                        <Link href={'https://openweathermap.org/weather-conditions'}>
                            {'Open Weather Map Page Icon List >'}
                        </Link>
                    </span>
                </div>

                <div className="bg-white text-white text-2l text-center">
                    <div
                        className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8
                divide-y divide-gray-500 lg:divide-y-0"
                    >
                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Clear sky (day icon)'} value={getIconSourceLink('01d')} />
                            <Icon description={'Clear sky (night icon)'} value={getIconSourceLink('01n')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Few clouds (day icon)'} value={getIconSourceLink('02d')} />
                            <Icon description={'Few clouds (night icon)'} value={getIconSourceLink('02n')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Scattered clouds (day icon)'} value={getIconSourceLink('03d')} />
                            <Icon description={'Scattered clouds (night icon)'} value={getIconSourceLink('03n')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Broken clouds (day icon)'} value={getIconSourceLink('04d')} />
                            <Icon description={'Broken clouds (night icon)'} value={getIconSourceLink('04n')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Shower rain (day icon)'} value={getIconSourceLink('09d')} />
                            <Icon description={'Shower rain (night icon)'} value={getIconSourceLink('09n')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Rain (day icon)'} value={getIconSourceLink('10d')} />
                            <Icon description={'Rain rain (night icon)'} value={getIconSourceLink('10n')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Thunderstorm (day icon)'} value={getIconSourceLink('11d')} />
                            <Icon description={'Thunderstorm (night icon)'} value={getIconSourceLink('11n')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Snow (day icon)'} value={getIconSourceLink('13d')} />
                            <Icon description={'Snow (night icon)'} value={getIconSourceLink('13d')} />
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-9 divide-y divide-gray-500 lg:divide-y-0">
                            <Icon description={'Mist (day icon)'} value={getIconSourceLink('50d')} />
                            <Icon description={'Mist (night icon)'} value={getIconSourceLink('50n')} />
                        </div>
                    </div>
                </div>
            </PageContentWrapper>
        </Layout>
    );
}
