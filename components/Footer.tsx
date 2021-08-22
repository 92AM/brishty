import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <>
            <div className="bg-gray-800 pb-12">
                <div className="mx-auto container pt-12 flex flex-col items-center justify-center">
                    <div>
                        <img className={'w-44 h-44'} src={'/images/brishty-logos/B-logos_white.png'} />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-bold text-white">Find weather today!</h1>
                        <div className="my-10 text-base text-color f-f-l">
                            <ul className="md:flex items-center text-white">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a className="hover:underline" href={'/privacy-policy'}>
                                        Privacy policy
                                    </a>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a className="hover:underline" href={'/about'}>
                                        About us
                                    </a>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a className="hover:underline" href={'/about#brishty-contact-form'}>
                                        Contact us
                                    </a>
                                </li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                                    <a className="hover:underline" href={'/icons'}>
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
                                <a className="hover:underline" href={'https://www.arkamitra.com'}>
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
