import PageContentWrapper from '../components/PageContentWrapper';
import Layout from '../components/Layout';
import React from 'react';
import { AboutSvg, HomeSvg, RightChevronSvg } from '../components/SvgFactory';
import { CookieModal } from '../components/CookieModal';
import { onClickAboutUs, onClickReturnToHome } from '../services/NavigationHandler';

function Error(props: { statusCode: any }) {
    const { statusCode } = props;
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-20 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-5xl">
                        {statusCode
                            ? `Seems like an error ${statusCode} occurred on server.`
                            : 'Brishty is currently down, seems like an error occurred on client.'}
                    </span>
                    <span className="py-3 pt-4 pb-10 text-xl">
                        We deeply apologies for any inconvenience this may cause, we are trying hard to fix Brishty and
                        get it back up and running again!
                    </span>

                    {statusCode && (
                        <>
                            <span className="py-3 pb-4 text-2xl">Meanwhile, here are few suggestion(s) for you.</span>
                            <div
                                className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                                onClick={onClickReturnToHome}
                            >
                                <div className="flex space-x-2">
                                    <HomeSvg viewBox={'0 0 24 24'} className={'flex-none mx-4 h-7 w-7 mt-1'} />
                                    <div className="flex-1">
                                        <p className="pt-1 text-lg text-gray-700 text-base">Back to home</p>
                                    </div>
                                    <div className="flex-2 float-right">
                                        <RightChevronSvg
                                            className={'pl-18 pt-1 flex-1 h-7 w-7'}
                                            viewBox={'0 0 24 24'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                                onClick={onClickAboutUs}
                            >
                                <div className="flex space-x-2">
                                    <AboutSvg viewBox={'0 0 24 24'} className={'flex-none mx-4 h-7 w-7 mt-1'} />
                                    <div className="flex-1">
                                        <p className="pt-1 text-lg text-gray-700 text-base">About us</p>
                                    </div>
                                    <div className="flex-2 float-right">
                                        <RightChevronSvg
                                            className={'pl-18 pt-1 flex-1 h-7 w-7'}
                                            viewBox={'0 0 24 24'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </PageContentWrapper>
            <CookieModal />
        </Layout>
    );
}

Error.getInitialProps = (props: { res: any; err: any }) => {
    const { res, err } = props;
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
