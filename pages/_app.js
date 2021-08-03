import React from 'react';
import '../styles/globals.css';
import '../styles/customStyles.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
