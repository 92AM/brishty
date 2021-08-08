import React from 'react';
import Head from 'next/head';

type Props = {
    searchTerm?: string;
};

const Seo = ({ searchTerm = '' }: Props) => {
    const description = `Displaying weather in ${searchTerm} - Find weather about any city in the world.`;
    const keywords = `${searchTerm} weather, weather, brishty, weather website, uk weather, world weather ${
        searchTerm && ', ' + searchTerm
    }`;
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={description} />
            <meta name="author" content="Arka Mitra" />
            <meta name="keywords" content={keywords} />
        </Head>
    );
};

export default Seo;
