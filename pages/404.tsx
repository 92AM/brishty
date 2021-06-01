import React from "react";
import Layout from "../components/Layout";
import PageContentWrapper from "../components/PageContentWrapper";
import {getWindow} from "../services/BrowserService";

const onClickReturnToHome = () => {
    getWindow().location.assign('/');
};

const onClickTopUkWeathers = () => {
    getWindow().location.assign('/weather/ukweather');
};

const onClickTopWorldWeathers = () => {
    getWindow().location.assign('/weather/worldweather');
};

export default function Custom404() {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={"px-4 pt-20 pb-20 min-h-screen"}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-4xl">
                        Sorry, something went wrong! We couldn't find what you were looking for.
                    </span>
                    <span className="py-3 pb-10 text-xl">
                        Here are few suggestions for you.
                    </span>
                </div>
                <div
                    className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-4 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                    onClick={onClickReturnToHome}
                >
                    <div className="flex space-x-6">
                        <svg className="flex-none mx-4 h-7 w-7 mt-1" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1
                                  1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        <div className="flex-1">
                            <p className="pt-1 text-xl text-gray-700 text-base">Back to home</p>
                        </div>
                        <div className="flex-2 float-right">
                            <svg className="pl-18 pt-1 flex-1 h-7 w-7" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-4 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                    onClick={onClickTopUkWeathers}
                >
                    <div className="flex space-x-6">
                        <svg className="flex-none mx-4 h-7 w-7 mt-1" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div className="flex-1">
                            <p className="pt-1 text-xl text-gray-700 text-base">View weather of top UK cities</p>
                        </div>
                        <div className="flex-2 float-right">
                            <svg className="pl-18 pt-1 flex-1 h-7 w-7" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-4 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                    onClick={onClickTopWorldWeathers}
                >
                    <div className="flex space-x-6">
                        <svg className="flex-none mx-4 h-7 w-7 mt-1" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0
                                  0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21
                                  12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div className="flex-1">
                            <p className="pt-1 text-xl text-gray-700 text-base">View weather of top world cities</p>
                        </div>
                        <div className="flex-2 float-right">
                            <svg className="pl-18 pt-1 flex-1 h-7 w-7" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </PageContentWrapper>
        </Layout>
    );
}