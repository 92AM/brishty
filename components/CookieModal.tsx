import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { COOKIE_CONSENT_NAME } from '../utility/constants';

export const CookieModal = () => {
    const [cookieConsentValue] = useState<boolean>(Cookies.get(COOKIE_CONSENT_NAME)?.toLowerCase() === 'true');
    const [showCookieModal, setShowCookieModal] = useState<boolean>(Cookies.get(COOKIE_CONSENT_NAME)?.toLowerCase() !== 'true');

    const setCookieConsentValue = (): void => {
        Cookies.set(COOKIE_CONSENT_NAME, 'true');
        setShowCookieModal(false);
    };

    return !cookieConsentValue && showCookieModal ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-5xl">
                    <div className="p-4 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100">
                        <div className="relative p-2 flex-auto">
                            <p className="my-2 text-gray-900 text-lg leading-relaxed">
                                To make Brishty work, we log user data. By using Brishty, you agree to our{' '}
                                <a className={'font-semibold'} href={'/privacy-policy'}>
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>
                        <div className="p-2 flex justify-center">
                            <button
                                className="bg-gray-900 hover:bg-gray-600 text-white text-xl font-bold py-4 px-8 rounded-md justify-center item-center"
                                onClick={() => setCookieConsentValue()}
                            >
                                Ok cool!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-90 fixed inset-0 z-40 bg-gray-900" />
        </>
    ) : null;
};
