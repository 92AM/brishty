import React from 'react';
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

SwiperCore.use([Navigation]);

const generateKey = (data: any, index: any) => {
    return `${data}_${index}`;
};

export const HourlyWeatherCarousel = (props: any) => {

    const {
        componentsToRenderOnSlides = [],
        slideSpaceBetween = undefined,
        slidesOffsetAfter = undefined,
        slidesPerView = undefined,
        onSlideNextTransitionStart = () => {
        },
        onSlidePrevTransitionStart = () => {
        },
        slideWidth = undefined,
    } = props;

    const slides = componentsToRenderOnSlides.map((each: any, idx: any) =>
        <SwiperSlide key={generateKey(each, idx)}>
            {each}
        </SwiperSlide>
    );

    return (
        <Swiper
            width={slideWidth}
            spaceBetween={slideSpaceBetween}
            slidesOffsetAfter={slidesOffsetAfter}
            slidesPerView={slidesPerView}
            data-test='swiper'
            onSlideNextTransitionStart={onSlideNextTransitionStart}
            onSlidePrevTransitionStart={onSlidePrevTransitionStart}
            onReachEnd={() => {console.log("Last slide reached!")}}
            // navigation
        >
            {slides}
        </Swiper>
    );
};