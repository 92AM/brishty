/* eslint-disable  @typescript-eslint/ban-ts-comment */

import React, { useEffect } from 'react';

export const GoogleAdComponent = () => {
    useEffect(() => {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5329664133778287"
                crossOrigin="anonymous"
            />
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-5329664133778287"
                data-ad-slot="5523921350"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </>
    );
};
