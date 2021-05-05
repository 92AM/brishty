import * as React from 'react'

import {WeatherDetails} from '../interfaces'
import {HourlyWeatherCarousel} from "./HourlyWeatherCarousel";

type ListDetailProps = {
    item: WeatherDetails
}

// const windowWidth = window.innerWidth;

const ListWeatherDetail = ({item: weatherDetails}: ListDetailProps) => {

    const carouselProps = (componentsToRenderOnSlides: any) => {
        const slideSpaceBetween = 16;
        const slideWidth = 150;
        const getSlidesOffsetAfter = 0;

        return {
            componentsToRenderOnSlides: componentsToRenderOnSlides,
            slideSpaceBetween: slideSpaceBetween,
            slideWidth: slideWidth,
            slidesOffsetAfter: getSlidesOffsetAfter,
            slidesPerView: 1
        };
    };

    const slideComponents = [];
    slideComponents.push(
        <div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
            <h1 className="text-2xl p-1 text-center">Now</h1>
            <img
                className=""
                src={`https://openweathermap.org/img/wn/04n@4x.png`}
                alt={'blah blah'}
            />
            <h1 className="text-2xl p-1 text-center">8°C</h1>
        </div>
    )
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">17:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">8°C</h1>
    </div>)
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">18:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">7°C</h1>
    </div>)
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">19:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">7°C</h1>
    </div>)
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">20:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">7°C</h1>
    </div>)
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">21:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">7°C</h1>
    </div>)
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">22:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">6°C</h1>
    </div>)
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">23:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">6°C</h1>
    </div>)
    slideComponents.push(<div className="border-2 border-opacity-25 border-gray-500 rounded-lg w-36 md:w-auto">
        <h1 className="text-2xl p-1 text-center">00:00</h1>
        <img
            className=""
            src={`https://openweathermap.org/img/wn/04n@4x.png`}
            alt={'blah blah'}
        />
        <h1 className="text-2xl p-1 text-center">6°C</h1>
    </div>)

    return (
        <div className="md:flex space-x-4">
            <div className="flex-1 p-4 max-w-sx text-gray-800 container mx-auto">
                <h1 className="text-5xl p-1 text-center">{weatherDetails.locationName}</h1>
                <h2 className="text-xl text-center capitalize p-1">
                    {weatherDetails.current.weather.description}
                </h2>
                <h1 className="text-8xl p-1 text-center">{weatherDetails.current.currentTemp}</h1>
                <h2 className="text-xl text-center">
                    High : {weatherDetails.current.maxTemp}
                </h2>
                <h2 className="text-xl text-center">
                    Low : {weatherDetails.current.minTemp}
                </h2>
            </div>
            <div className="container md:max-w-lg lg:max-w-2xl xl:max-w-5xl 2xl:max-w-7xl pt-6 pb-6 pr-6">
                <HourlyWeatherCarousel {...carouselProps(slideComponents)} />
            </div>
            {/*<div className="md:flex">*/}
            {/*    <div className="md:flex-shrink-0">*/}
            {/*        <img className="h-48 w-full object-cover md:w-48"*/}
            {/*             src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80"*/}
            {/*             width="448" height="299" alt="Man looking at item at a store"></img>*/}
            {/*    </div>*/}
            {/*    <div className="container mx-auto p-8 overflow-hidden">*/}
            {/*        /!*<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case*!/*/}
            {/*        /!*    study*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        /!*<a href="#"*!/*/}
            {/*        /!*   className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding*!/*/}
            {/*        /!*    customers for your new business</a>*!/*/}
            {/*        /!*<p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard*!/*/}
            {/*        /!*    work. Here are five ideas you can use to find your first customers.</p>*!/*/}
            {/*        <HourlyWeatherCarousel {...carouselProps(slideComponents)} />*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default ListWeatherDetail
