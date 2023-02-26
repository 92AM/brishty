import '../styles/globals.css';
import '../styles/customStyles.css';
import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { BrishtyContextProvider } from '../context/BrishtyCookieContext';

function App(props: { Component: FC; pageProps: any }) {
    const { Component, pageProps } = props;
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => gtag.pageview(url);
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => router.events.off('routeChangeComplete', handleRouteChange);
    }, [router.events]);

    return (
        <BrishtyContextProvider>
            <Component {...pageProps} />
        </BrishtyContextProvider>
    );
}

export default App;
