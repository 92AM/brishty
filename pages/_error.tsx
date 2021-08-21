import PageContentWrapper from '../components/PageContentWrapper';
import Layout from '../components/Layout';
import React from 'react';

type ErrorProps = {
    statusCode?: number;
};

type InitialPropsProps = {
    res?: { statusCode?: number };
    err?: { statusCode?: number };
};

function Error({ statusCode }: ErrorProps) {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-20 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-4xl">
                        {statusCode
                            ? `Brishty is currently down, seems like an error ${statusCode} occurred on server.`
                            : 'Brishty is currently down, seems like an error occurred on client.'}
                    </span>
                    <span className="py-3 pb-10 text-xl">
                        We deeply apologies for any inconvenience this may cause, we are trying hard to fix Brishty and
                        get it up and running again!
                    </span>
                </div>
            </PageContentWrapper>
        </Layout>
    );
}

Error.getInitialProps = ({ res, err }: InitialPropsProps) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
