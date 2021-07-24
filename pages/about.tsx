import React from "react";
import Layout from "../components/Layout";
import PageContentWrapper from "../components/PageContentWrapper";
import Link from "next/link";
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

export default function About() {
    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={"px-4 pt-20 pb-5 min-h-screen"}>
                <div className="grid grid-cols-1 gap-4 container mx-auto">
                    <span className="pt-12 text-4xl">
                        About us
                    </span>
                    <span className="text-2xl">
                        An overview of the Brishty website, including who we are and where we're based, the services we provide.
                    </span>

                    <div className="py-3 text-xl">
                        <p className="py-3">
                            All across the world people make important decisions based on the weather. Brishty provides
                            weather
                            forecasts to help people with those decisions so that they can be safe and create plans
                            successfully.
                        </p>
                        <p className="italic font-semibold py-3">
                            "The word Brishty means rain in the Indian language Bengali"
                        </p>
                        <p className="py-3">
                            The weather related information on Brishty website are all provided by the following
                            external companies :
                            <ul className="list-disc pl-8">
                                <li>Weather information are provided by <span className="text-blue-900 hover:underline"><Link
                                    href={"https://openweathermap.org/"}>Open Weather
                                    Map</Link></span></li>
                                <li>Nearby locations are provided by <span
                                    className="text-blue-900 hover:underline"><Link
                                    href={"https://rapidapi.com/wirefreethought/api/geodb-cities"}>
                                    GeoDB Cities</Link></span></li>
                            </ul>
                        </p>
                    </div>

                    <hr className="border-solid border-1 border-gray-400"/>

                    <h3 className="mt-6 text-2xl text-gray-900">Get in touch!</h3>
                    <p className="py-3 text-xl">
                        Please feel free to send us questions and feedbacks by completing the below form.
                    </p>
                    <form name="brishtyContactForm" method="POST" action="/thanks" data-netlify="true"
                          id="brishty-contact-form" className="form border-solid rounded-lg border-2 bg-white p-6 mt-2 mr-2 ml-2 mb-8">
                        <input type="hidden" name="form-name" value="brishtyContactForm"/>
                        <input type="text" name="name" id="contact-form-nam" placeholder="Your Name"
                               className="border p-2  w-full mt-3"/>

                        <input type="email" name="email" id="contact-form-email" placeholder="Your Email"
                               className="border p-2 w-full mt-3"/>
                        <textarea name="message" id="contact-form-message" placeholder="Write your message here"
                                  className="border p-2 mt-3 w-full form-textarea"/>

                        <button type="submit" value="Submit"
                                className="w-full h-16 mt-6 mb-3 bg-gray-800 hover:bg-gray-600 text-white font-semibold p-3">Send
                            Message
                        </button>
                    </form>


                    <hr className="border-solid border-1 border-gray-400"/>

                    <span className="pt-6 pb-6 text-2xl">Here are few suggestions that you may find useful.</span>

                    <div
                        className="container mx-auto rounded-t border-r border-b border-l border-t border-gray-300 bg-white rounded-b
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                        onClick={onClickReturnToHome}
                    >
                        <div className="flex space-x-2">
                            <svg className="flex-none mx-4 h-7 w-7 mt-1" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1
                                  1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                            <div className="flex-1">
                                <p className="pt-1 text-lg text-gray-700 text-base">Home page</p>
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
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                        onClick={onClickTopUkWeathers}
                    >
                        <div className="flex space-x-2">
                            <svg
                                className="flex-none mx-4 h-7 w-7 mt-1"
                                width="30"
                                height="30"
                                fill="1"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M2335 5109c-735-71-1413-528-1763-1189-345-650-346-1437-5-2090 289-554 804-967 1415-1135l56-15 208-321c177-273 213-323 245-340 48-24 90-24 138 0 32 17 68 67 245 340 114 177 209 321 211 321 16 0 228 69 306 100 494 197 915 577 1162 1050 113 215 194 465 234 720 26 170 24 501-5 670-42 247-98 423-207 645-216 441-583 807-1030 1025-374 184-791 259-1210 219zm416-299c786-80 1446-623 1675-1378 61-201 77-318 78-557 0-224-10-310-61-504-105-410-370-801-717-1060-216-161-424-261-691-332-60-16-121-37-135-47s-95-127-180-260-157-241-160-241-75 108-160 241-166 249-180 260c-14 10-81 33-150 52-354 97-634 258-885 510-691 693-766 1768-180 2551 78 104 268 295 372 373 399 301 888 441 1374 392z"
                                    transform="matrix(.1 0 0 -.1 0 512)"
                                />
                                <path
                                    d="M2415 4514c-418-49-754-208-1030-489-242-246-395-549-457-905-16-97-16-403 0-500 62-357 215-659 457-904 645-654 1684-661 2335-16 446 443 601 1092 404 1690-201 609-748 1050-1386 1119-91 10-255 12-323 5zm264-300l31-6v-535c0-515 1-535 20-573 13-26 34-47 60-60 38-19 58-20 573-20h535l6-31c8-41 8-197 0-238l-6-31H2828l-40-22c-24-14-48-38-59-60-18-35-19-67-19-571v-534l-31-7c-41-8-197-8-238 0l-31 6v535c0 515-1 535-20 573-13 26-34 47-60 60-38 19-58 20-573 20h-534l-7 31c-8 41-8 197 0 238l7 31h534c527 0 536 0 573 21 21 12 47 38 59 59 21 37 21 46 21 573v536l23 4c36 7 212 8 246 1zm-569-376v-303l-195 195c-107 107-191 197-187 200 35 30 98 73 150 104 57 35 207 105 225 106 4 0 7-136 7-302zm1035 247c81-39 210-118 242-149 10-9-30-54-182-206l-195-195v606l23-6c12-4 63-27 112-50zm-1551-763c-164-1-299 0-301 2-14 14 100 235 175 339l35 49 194-194 193-193-296-3zm2091 293c44-66 125-224 140-272l6-23h-606l195 195c152 152 197 192 206 182 7-6 33-43 59-82zM1700 2225c-152-152-197-192-206-182-48 50-175 278-199 355l-6 22h606l-195-195zm2124 173c-19-62-80-180-140-270l-66-101-194 194c-107 107-194 195-194 196 0 2 135 3 301 3h300l-7-22zm-1718-795c-14-14-242 104-339 176l-47 36 192 192 193 193 3-296c1-164 0-299-2-301zm1103 403l194-194-101-66c-90-60-208-121-269-140l-23-7v300c0 166 1 301 3 301 1 0 89-87 196-194z"
                                    transform="matrix(.1 0 0 -.1 0 512)"
                                />
                            </svg>

                            <div className="flex-1">
                                <p className="pt-1 text-lg text-gray-700 text-base">UK cities weather</p>
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
                    p-5 flex flex-col justify-between leading-normal drop-shadow-lg cursor-pointer mb-6"
                        onClick={onClickTopWorldWeathers}
                    >
                        <div className="flex space-x-2">
                            <svg className="flex-none mx-4 h-7 w-7 mt-1" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0
                                  0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21
                                  12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <div className="flex-1">
                                <p className="pt-1 text-lg text-gray-700 text-base">World cities weather</p>
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

                </div>

            </PageContentWrapper>
        </Layout>
    );
}