import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

export const CookieModalLoader = () => {
    const CookieModalComponent = useMemo(
        () =>
            dynamic(() => import('./CookieModal'), {
                loading: () => null,
                ssr: false,
            }),
        [],
    );
    return <CookieModalComponent />;
};
