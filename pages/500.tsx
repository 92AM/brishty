import React from 'react';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import { CookieModalLoader } from '../components/CookieModalLoader';

export default function Custom500() {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-20 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-5xl">
                        Brishty is down, seems like server responded back with with code 500.
                    </span>
                    <span className="py-3 pt-4 pb-10 text-xl">
                        We deeply apologies for any inconvenience this may cause, we are trying hard to fix Brishty and
                        get it back up and running again!
                    </span>{' '}
                </div>
            </PageContentWrapper>
            <CookieModalLoader />
        </Layout>
    );
}
