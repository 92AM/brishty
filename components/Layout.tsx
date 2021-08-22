import React, { Fragment, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
    background?: string;
    searchTerm?: string;
};

const Layout = ({ children, title, background, searchTerm }: Props) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <noscript>
                    You need to enable JavaScript to run this app, without it some feature may not work.
                </noscript>
                <link rel="icon" type="image/png" href="/images/brishty-logos/B-logos_white.png" />
            </Head>
            <Seo searchTerm={searchTerm} />
            <body className={background ? background : 'bg-gray-100'}>
                <Header />
                {children}
                <Footer />
            </body>
        </Fragment>
    );
};

export default Layout;
