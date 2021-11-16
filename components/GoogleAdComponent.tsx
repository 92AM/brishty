/* eslint-disable  @typescript-eslint/ban-ts-comment */

import React, { useEffect } from 'react';

export const GoogleAdComponent = () => {
    useEffect(() => {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div className="md:container md:mx-auto p-6">
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-5329664133778287"
                data-ad-slot="5523921350"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
};
