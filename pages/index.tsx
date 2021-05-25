import Layout from '../components/Layout'
import React from "react";
import PageContentWrapper from "../components/PageContentWrapper";
import SearchBox from "../components/SearchBox";

const IndexPage = () => (
    <Layout title="Brishty - search for weather">
        <div className="bg-cover pt-32 h-full bg-landscape">
            <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
                <div className="mx-auto container block bg-gray-800 max-w-5xl rounded-xl shadow-2xl">
                    <span className="block pt-6 text-center text-gray-200 text-3xl font-extrabold">Find your weather today</span>
                    <span
                        className="block pt-3 text-center text-lg text-gray-400">Search for your favourite location!</span>
                    <SearchBox/>
                </div>
            </PageContentWrapper>
        </div>
        <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
            <span className="block pt-3 text-center text-2xl text-gray-800">Top UK forecasts</span>

            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="w-full lg:max-w-full lg:flex shadow-lg">
                    <img className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="/images/london.jpg" title="Forest">
                    </img>
                    <div className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-800 font-bold text-xl mb-2">London</div>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                        </div>
                        <div className="flex items-center">
                            {/*<img className="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"></img>*/}
                            <div className="text-sm">
                                <p className="pb-1 text-gray-800 leading-none">Cloudy</p>
                                <a className="flex space-x-4" href="/weather/London, UK">
                                    <p className="text-gray-800 text-lg hover:underline">View Weather </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 flex-1 float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:max-w-full lg:flex shadow-lg">
                    <img className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="/images/manchester.jpg" title="Forest">
                    </img>
                    <div className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-800 font-bold text-xl mb-2">Manchester</div>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                        </div>
                        <div className="flex items-center">
                            {/*<img className="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"></img>*/}
                            <div className="text-sm">
                                <p className="pb-1 text-gray-800 leading-none">Cloudy</p>
                                <a className="flex space-x-4" href="/weather/Manchester, UK">
                                    <p className="text-gray-800 text-lg hover:underline">View Weather </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 flex-1 float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:max-w-full lg:flex shadow-lg">
                    <img className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="/images/birmingham.jpg" title="Forest">
                    </img>
                    <div className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-800 font-bold text-xl mb-2">Birmingham</div>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                        </div>
                        <div className="flex items-center">
                            {/*<img className="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"></img>*/}
                            <div className="text-sm">
                                <p className="pb-1 text-gray-800 leading-none">Cloudy</p>
                                <a className="flex space-x-4" href="/weather/Birmingham, UK">
                                    <p className="text-gray-800 text-lg hover:underline">View Weather </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 flex-1 float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:max-w-full lg:flex shadow-lg">
                    <img className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="/images/belfast.jpg" title="Forest">
                    </img>
                    <div className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-800 font-bold text-xl mb-2">Belfast</div>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                        </div>
                        <div className="flex items-center">
                            {/*<img className="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"></img>*/}
                            <div className="text-sm">
                                <p className="pb-1 text-gray-800 leading-none">Cloudy</p>
                                <a className="flex space-x-4" href="/weather/Belfast, UK">
                                    <p className="text-gray-800 text-lg hover:underline">View Weather </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 flex-1 float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:max-w-full lg:flex shadow-lg">
                    <img className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="/images/edinburgh.jpg" title="Forest">
                    </img>
                    <div className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-800 font-bold text-xl mb-2">Edinburgh</div>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                        </div>
                        <div className="flex items-center">
                            {/*<img className="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"></img>*/}
                            <div className="text-sm">
                                <p className="pb-1 text-gray-800 leading-none">Cloudy</p>
                                <a className="flex space-x-4" href="/weather/Edinburgh, UK">
                                    <p className="text-gray-800 text-lg hover:underline">View Weather </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 flex-1 float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:max-w-full lg:flex shadow-lg">
                    <img className="hidden lg:block h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="/images/glasgow.jpg" title="Forest">
                    </img>
                    <div className="container mw-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b lg:rounded-tl-none lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-800 font-bold text-xl mb-2">Glasgow</div>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                            <p className="text-gray-700 text-base">Lorem ipsum .</p>
                        </div>
                        <div className="flex items-center">
                            {/*<img className="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"></img>*/}
                            <div className="text-sm">
                                <p className="pb-1 text-gray-800 leading-none">Cloudy</p>
                                <a className="flex space-x-4" href="/weather/Glasgow, UK">
                                    <p className="text-gray-800 text-lg hover:underline">View Weather </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 flex-1 float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </PageContentWrapper>
    </Layout>
)

export default IndexPage
