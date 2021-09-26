import React from 'react';
import '../styles/globals.css';
import '../styles/customStyles.css';
import Cookies from 'js-cookie';

const setTypeaheadCookie = (useTypeaheadLocationSearchCurrentValue) => {
    return useTypeaheadLocationSearchCurrentValue === undefined || useTypeaheadLocationSearchCurrentValue === false
        ? false
        : useTypeaheadLocationSearchCurrentValue;
};

export default function App({ Component, pageProps }) {
    const useTypeaheadLocationSearchCurrentValue = Cookies.get('use-typeahead-location-search');

    Cookies.set('use-typeahead-location-search', setTypeaheadCookie(useTypeaheadLocationSearchCurrentValue));

    return <Component {...pageProps} />;
}
