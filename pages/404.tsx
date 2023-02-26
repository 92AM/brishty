import React from 'react';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import { AboutSvg, GbSvg, HomeSvg, RightChevronSvg, WorldSvg } from '../components/SvgFactory';
import { CookieModal } from '../components/CookieModal';
import {
    onClickAboutUs,
    onClickReturnToHome,
    onClickTopUkWeathers,
    onClickTopWorldWeathers,
} from '../services/NavigationHandler';

export default function Custom404() {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-20 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-5xl">
                        Sorry, something went wrong! We couldn&apos;t find what you were looking for.
                    </span>
                    <span className="py-3 pb-10 text-xl">Here are few suggestions for you.</span>
                </div>
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
                            <RightChevronSvg className={'pl-18 pt-1 flex-1 h-7 w-7'} viewBox={'0 0 24 24'} />
                        </div>
                    </div>
                </div>
                <div
                    className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                    onClick={onClickTopUkWeathers}
                >
                    <div className="flex space-x-2">
                        <GbSvg className={'flex-none mx-4 h-7 w-7 mt-1'} viewBox={'0 0 512 512'} />
                        <div className="flex-1">
                            <p className="pt-1 text-lg text-gray-700 text-base">UK cities weather</p>
                        </div>
                        <div className="flex-2 float-right">
                            <RightChevronSvg className={'pl-18 pt-1 flex-1 h-7 w-7'} viewBox={'0 0 24 24'} />
                        </div>
                    </div>
                </div>
                <div
                    className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                    onClick={onClickTopWorldWeathers}
                >
                    <div className="flex space-x-2">
                        <WorldSvg viewBox={'0 0 24 24'} className={'flex-none mx-4 h-7 w-7 mt-1'} />
                        <div className="flex-1">
                            <p className="pt-1 text-lg text-gray-700 text-base">World cities weather</p>
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
            </PageContentWrapper>
            <CookieModal />
        </Layout>
    );
}
