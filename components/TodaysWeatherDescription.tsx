import React from 'react';
import { WeatherDetails } from '../interfaces';
import Link from 'next/link';

type Props = {
    item: WeatherDetails;
};

const TodaysWeatherDescription = ({ item: weatherDetails }: Props) => {
    return (
        <div className="px-4 2xl:px-32">
            <div className="text-gray-800 text-2xl text-left p-2 pb-4">
                Weather forecast in {weatherDetails.locationName} today
            </div>
            <div className="text-gray-800 text-lg text-left p-2">
                Expect {weatherDetails.current.weather.description} today, currently the temperature in{' '}
                {weatherDetails.locationName} is {weatherDetails.current.currentTemp}C. The high will be{' '}
                {weatherDetails.current.maxTemp}C and the low tonight will be {weatherDetails.current.minTemp}C. Check
                out today&apos;s detailed weather and the whole week&apos;s weather breakdown below.
            </div>
            <hr className="mt-8 border-solid border-1 border-gray-400" />
            <div className="text-gray-800 text-2xl text-left mt-8 p-2 pb-4">Information about weather icons used</div>
            <div className="text-gray-800 text-lg text-left p-2">
                If you would like to know a bit more about the various weather icons used on this site, please feel free
                to look at the icons page where we have outlined the meaning of each icon.
            </div>

            <div className="text-blue-900 text-lg text-left p-2 hover:underline">
                <Link href={'/icons'}>{'Find out more about weather icons here >'}</Link>
            </div>
        </div>
    );
};

export default TodaysWeatherDescription;
