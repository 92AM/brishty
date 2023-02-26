import React from 'react';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import Link from 'next/link';
import { GbSvg, HomeSvg, RightChevronSvg, WorldSvg } from '../components/SvgFactory';
import { onClickReturnToHome, onClickTopUkWeathers, onClickTopWorldWeathers } from '../services/NavigationHandler';
import { CookieModalLoader } from '../components/CookieModalLoader';

export default function About() {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-5 min-h-screen'}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-4xl">About us</span>
                    <span className="text-2xl">
                        An overview of the Brishty website, including who we are and the services we provide.
                    </span>
                    <div className="py-3 text-xl">
                        <p className="py-3">
                            All across the world people make important decisions based on the weather. Brishty provides
                            weather forecasts to help people with those decisions so that they can be safe and create
                            plans successfully.
                        </p>
                        <p className="italic font-semibold py-3">
                            &quot;The word Brishty means rain in the Indian language Bengali&quot;
                        </p>
                        <p className="py-3">
                            The weather related information and news on Brishty website are all provided by the
                            following external organisations :
                            <ul className="list-disc pl-8">
                                <li>
                                    Weather information are provided by{' '}
                                    <span className="text-blue-900 hover:underline">
                                        <Link href={'https://openweathermap.org/'}>Open Weather Map</Link>
                                    </span>
                                </li>
                                <li>
                                    Nearby locations are provided by{' '}
                                    <span className="text-blue-900 hover:underline">
                                        <Link href={'https://rapidapi.com/wirefreethought/api/geodb-cities'}>
                                            GeoDB Cities
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    The news on the homepage is powered by NY Times{' '}
                                    <span className="text-blue-900 hover:underline">
                                        <Link href={'https://www.nytimes.com/'}>NY Times</Link>
                                    </span>
                                </li>
                            </ul>
                        </p>
                    </div>

                    <hr className="border-solid border-1 border-gray-400" />

                    <h3 className="mt-6 text-2xl text-gray-900" id={'brishty-contact-form'}>
                        Get in touch!
                    </h3>
                    <p className="py-3 text-xl">
                        Please feel free to send us questions and feedbacks by completing the below form.
                    </p>
                    <form
                        name="brishtyContactForm"
                        method="POST"
                        action="/thanks"
                        data-netlify="true"
                        id="brishty-contact-form"
                        className="form border-solid rounded-lg border-2 bg-white p-6 mt-2 mr-2 ml-2 mb-8"
                    >
                        <input type="hidden" name="form-name" value="brishtyContactForm" />
                        <input
                            type="text"
                            name="name"
                            id="contact-form-nam"
                            placeholder="Your Name"
                            className="border p-2  w-full mt-3"
                        />

                        <input
                            type="email"
                            name="email"
                            id="contact-form-email"
                            placeholder="Your Email"
                            className="border p-2 w-full mt-3"
                        />
                        <textarea
                            name="message"
                            id="contact-form-message"
                            placeholder="Write your message here"
                            className="border p-2 mt-3 w-full form-textarea"
                        />

                        <button
                            type="submit"
                            value="Submit"
                            className="w-full h-16 mt-6 mb-3 bg-gray-800 hover:bg-gray-600 text-white font-semibold p-3"
                        >
                            Send Message
                        </button>
                    </form>

                    <hr className="border-solid border-1 border-gray-400" />

                    <span className="pt-6 pb-6 text-2xl">Here are few suggestions that you may find useful.</span>

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
                        onClick={onClickTopUkWeathers}
                    >
                        <div className="flex space-x-2">
                            <GbSvg viewBox={'0 0 512 512'} className={'flex-none mx-4 h-7 w-7 mt-1'} />
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
                </div>
            </PageContentWrapper>
            <CookieModalLoader />
        </Layout>
    );
}
