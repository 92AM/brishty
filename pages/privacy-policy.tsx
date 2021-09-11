import React from 'react';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import { getWindow } from '../services/BrowserService';

const onClickReturnToHome = () => {
    getWindow().location.assign('/');
};

const onClickAboutUs = () => {
    getWindow().location.assign('/about');
};

export default function PrivacyPolicy() {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-5 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-4xl">Privacy Policy</span>
                    <span className="pt-4 text-2xl mt-4 mb-4 space-y-8">
                        <p>Firstly we would like to thank you for using our services.</p>
                        <p>
                            This is just a disclaimer to inform all our users that we do not store any consumer data,
                            period.
                        </p>
                        <p>
                            We are physically unable to store any data as we{' '}
                            <span className={'font-semibold'}>do not</span> own any backend database to store it in! As
                            an user you can have full confidence when browsing{' '}
                            <a className={'hover:underline'} href={'https://www.brishty.net'}>
                                www.brishty.net
                            </a>
                        </p>
                        <p>
                            If you have any questions, please do not hesitate to get in touch with us{' '}
                            <a className={'hover:underline'} href={'/about#brishty-contact-form'}>
                                here
                            </a>
                            .
                        </p>
                        <p>
                            If you contact us using the above link then we will securely hold the information you choose
                            to provide us, but be assured we will not be sharing your information with any third
                            parties.
                        </p>
                    </span>

                    <hr className="mt-8 mb-8 border-solid border-1 border-gray-400" />

                    <span className="pt-6 pb-6 text-2xl">Here are couple of suggestions that you may find useful.</span>

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
                                <p className="pt-1 text-lg text-gray-700 text-base">Home page</p>
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
