import React, { Fragment, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import Head from 'next/head';

type LayoutProps = {
    children?: ReactNode;
    title?: string;
    background?: string;
    searchTerm?: string;
};

const Layout = ({ children, title, background, searchTerm }: LayoutProps) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <noscript>
                    You need to enable JavaScript to run this app, without it some feature may not work.
                </noscript>
                <link rel="icon" type="image/png" href="/images/brishty-logos/B-logos_white.png" />
                <link rel="stylesheet" href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css" />
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
