import React, { useEffect, useState } from 'react';
import { getDocument, getWindow } from '../services/BrowserService';

const googleAdsContainerName = 'adsbygoogle';

export const GoogleAdComponent = () => {
    const [shouldCollapseAdComponent, setShouldCollapseAdComponent] = useState(false);

    useEffect(() => {
        (getWindow().adsbygoogle = getWindow().adsbygoogle || []).push({});
    }, []);

    useEffect(() => {
        setShouldCollapseAdComponent(getDocument().getElementsByClassName(googleAdsContainerName)?.length <= 1);
    });

    return shouldCollapseAdComponent ? null : (
        <div className="items-center justify-center bg-gray-800 border-b border-gray-100 p-4">
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
