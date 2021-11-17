import '../styles/globals.css';
import '../styles/customStyles.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Cookies from 'js-cookie';
import { COOKIE_CONSENT_NAME } from '../utility/constants';

const setCookieConsent = (cookieConsentValue) => {
    return cookieConsentValue === undefined || cookieConsentValue === false ? false : cookieConsentValue;
};

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    const cookieConsentValue = Cookies.get(COOKIE_CONSENT_NAME);
    Cookies.set(COOKIE_CONSENT_NAME, setCookieConsent(cookieConsentValue));

    return <Component {...pageProps} />;
};

export default App;
