import React from "react";
import '../styles/globals.css'
import '../styles/carousel.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

export default function App({Component, pageProps}) {
    return <Component {...pageProps} />
}