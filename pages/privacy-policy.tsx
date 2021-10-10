import React from 'react';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import { getWindow } from '../services/BrowserService';
import { AboutSvg, HomeSvg, RightChevronSvg } from '../components/SvgFactory';

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
        </Layout>
    );
}
