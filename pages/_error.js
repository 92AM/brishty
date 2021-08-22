import PageContentWrapper from '../components/PageContentWrapper';
import Layout from '../components/Layout';
import React from 'react';
import { getWindow } from '../services/BrowserService';

const onClickAboutUs = () => {
    getWindow().location.assign('/about');
};

const onClickReturnToHome = () => {
    getWindow().location.assign('/');
};

function Error({ statusCode }) {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-20 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-5xl">
                        {statusCode
                            ? `Brishty is currently down, seems like an error ${statusCode} occurred on server.`
                            : 'Brishty is currently down, seems like an error occurred on client.'}
                    </span>

                    <span className="py-3 pt-4 pb-10 text-xl">
                        We deeply apologies for any inconvenience this may cause, we are trying hard to fix Brishty and
                        get it back up and running again!
                    </span>
                    <span className="py-3 pb-4 text-2xl">Meanwhile, here are few suggestion(s) for you.</span>
                    <div
                        className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                        onClick={onClickReturnToHome}
                    >
                        <div className="flex space-x-2">
                            <svg
                                className="flex-none mx-4 h-7 w-7 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1
                                  1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <div className="flex-1">
                                <p className="pt-1 text-lg text-gray-700 text-base">Back to home</p>
                            </div>
                            <div className="flex-2 float-right">
                                <svg
                                    className="pl-18 pt-1 flex-1 h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                        onClick={onClickAboutUs}
                    >
                        <div className="flex space-x-2">
                            <svg className="flex-none mx-4 h-7 w-7 mt-1" fill="#000000" viewBox="0 0 24 24">
                                <path d="M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z" />
                            </svg>
                            <div className="flex-1">
                                <p className="pt-1 text-lg text-gray-700 text-base">About us</p>
                            </div>
                            <div className="flex-2 float-right">
                                <svg
                                    className="pl-18 pt-1 flex-1 h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContentWrapper>
        </Layout>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
