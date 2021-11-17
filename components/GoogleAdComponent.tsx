/* eslint-disable  @typescript-eslint/ban-ts-comment */

import React, { useEffect } from 'react';

export const GoogleAdComponent = () => {
    useEffect(() => {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div className="items-center justify-center bg-gray-800 border-b border-gray-100 p-8">
            <div className="max-w-xl mx-auto max-w-screen-xl">
                <div className="overflow-x-scroll hide-scroll-bar ">
                    <ins
                        className="adsbygoogle justify-center items-center flex"
                        style={{ display: 'flex' }}
                        data-ad-client="ca-pub-5329664133778287"
                        data-ad-slot="5523921350"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </div>
            </div>
        </div>
    );
};
