import React from 'react';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import { AboutSvg, HomeSvg, RightChevronSvg } from '../components/SvgFactory';
import { onClickAboutUs, onClickReturnToHome } from '../services/NavigationHandler';
import { CookieModalLoader } from '../components/CookieModalLoader';

export default function Thanks() {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-5 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-4xl">Thanks for dropping us a message!</span>
                    <span className="text-2xl mt-4 mb-4">We will respond back to you as soon as possible.</span>

                    <hr className="mt-8 mb-8 border-solid border-1 border-gray-400" />

                    <span className="pt-6 pb-6 text-2xl">Here are couple of suggestions that you may find useful.</span>

                    <div
                        className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                        onClick={onClickReturnToHome}
                    >
                        <div className="flex space-x-2">
                            <HomeSvg viewBox={'0 0 24 24'} className={'flex-none mx-4 h-7 w-7 mt-1'} />
                            <div className="flex-1">
                                <p className="pt-1 text-lg text-gray-700 text-base">Home page</p>
                            </div>
                            <div className="flex-2 float-right">
                                <RightChevronSvg className={'pl-18 pt-1 flex-1 h-7 w-7'} viewBox={'0 0 24 24'} />
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
                                <RightChevronSvg className={'pl-18 pt-1 flex-1 h-7 w-7'} viewBox={'0 0 24 24'} />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContentWrapper>
            <CookieModalLoader />
        </Layout>
    );
}
