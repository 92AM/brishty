import React from 'react';
import { fireGoogleAnalyticsEvent } from '../services/GenericUtilityService';
import {
    GA_EVENT_NAVIGATED_ABOUT_US_ID,
    GA_EVENT_NAVIGATED_ARKA_MITRA_WEBSITE_ID,
    GA_EVENT_NAVIGATED_CONTACT_US_ID,
    GA_EVENT_NAVIGATED_ICONS_ID,
    GA_EVENT_NAVIGATED_PRIVACY_POLICY_ID,
} from '../utility/constants';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <>
            <div className="bg-gray-800 pb-12">
                <div className="mx-auto container pt-12 flex flex-col items-center justify-center">
                    <div>
                        <img
                            className={'w-44 h-44'}
                            alt={'brishty-logo'}
                            src={'/images/brishty-logos/B-logos_white.png'}
                        />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-bold text-white">Find weather today!</h1>
                        <div className="my-10 text-base text-color f-f-l">
                            <ul className="md:flex items-center text-white">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a
                                        className="hover:underline"
                                        href={'/privacy-policy'}
                                        onClick={() =>
                                            fireGoogleAnalyticsEvent(
                                                'navigated-to-privacy-policy-page',
                                                'navigated',
                                                `User clicked privacy policy link to navigate to privacy policy page.`,
                                                GA_EVENT_NAVIGATED_PRIVACY_POLICY_ID,
                                            )
                                        }
                                    >
                                        Privacy policy
                                    </a>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a
                                        className="hover:underline"
                                        href={'/about'}
                                        onClick={() =>
                                            fireGoogleAnalyticsEvent(
                                                'navigated-to-about-us-page',
                                                'navigated',
                                                `User clicked about us link to navigate to about us page.`,
                                                GA_EVENT_NAVIGATED_ABOUT_US_ID,
                                            )
                                        }
                                    >
                                        About us
                                    </a>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a
                                        className="hover:underline"
                                        href={'/about#brishty-contact-form'}
                                        onClick={() =>
                                            fireGoogleAnalyticsEvent(
                                                'navigated-to-contact-us-page',
                                                'navigated',
                                                `User clicked contact us link to navigate to contact us page.`,
                                                GA_EVENT_NAVIGATED_CONTACT_US_ID,
                                            )
                                        }
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a
                                        className="hover:underline"
                                        href={'/icons'}
                                        onClick={() =>
                                            fireGoogleAnalyticsEvent(
                                                'navigated-to-icons-page',
                                                'navigated',
                                                `User clicked icons link to navigate to icons page.`,
                                                GA_EVENT_NAVIGATED_ICONS_ID,
                                            )
                                        }
                                    >
                                        Icons
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-9/12 h-0.5 bg-gray-600 rounded-full" />
                    <div className="flex justify-between items-center pt-12">
                        <div className="text-base text-white mb-2">
                            <p>{`Brishty © ${currentYear}`}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                        <div className="text-base text-white mb-5">
                            <span>
                                Created by{' '}
                                <a
                                    className="hover:underline"
                                    href={'https://www.arkamitra.com'}
                                    onClick={() =>
                                        fireGoogleAnalyticsEvent(
                                            'navigated-to-arka-mitra-website',
                                            'navigated',
                                            `User clicked arka mitra link to navigate to arka mitra's website.`,
                                            GA_EVENT_NAVIGATED_ARKA_MITRA_WEBSITE_ID,
                                        )
                                    }
                                >
                                    Arka Mitra
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
