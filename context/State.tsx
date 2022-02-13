import { createContext, ReactNode, useContext, useEffect } from 'react';
import { COOKIE_CONSENT_NAME } from '../utility/constants';
import { getConsentCookieValue, setConsentCookieValue } from '../services/CookieService';

export interface BrishtyContextProps {
    displayCookieConsentModal: boolean | true;
}

export const BrishtyContext = createContext({} as BrishtyContextProps);
BrishtyContext.displayName = 'BrishtyContext';

const getSanitisedConsentCookieValue = (consentCookieValue: string | undefined): string => {
    return consentCookieValue === undefined || consentCookieValue.toLowerCase() !== 'true' ? 'false' : 'true';
};

export function BrishtyContextProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        setConsentCookieValue(
            COOKIE_CONSENT_NAME,
            getSanitisedConsentCookieValue(getConsentCookieValue(COOKIE_CONSENT_NAME)),
        );
    }, []);

    const sharedState = {
        displayCookieConsentModal: getConsentCookieValue(COOKIE_CONSENT_NAME)?.toLowerCase() !== 'true',
    } as BrishtyContextProps;

    return <BrishtyContext.Provider value={sharedState}>{children}</BrishtyContext.Provider>;
}

export const useBrishtyContext = (): BrishtyContextProps => useContext(BrishtyContext);
