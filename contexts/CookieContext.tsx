import { createContext, ReactNode, useContext, useEffect } from 'react';
import { COOKIE_CONSENT_NAME } from '../utility/constants';
import { getConsentCookieValue, setConsentCookieValue } from '../services/CookieService';

export interface ContextProps {
    displayCookieConsentModal: boolean | false;
}

export const CookieContext = createContext({} as ContextProps);
CookieContext.displayName = 'CookieContext';

const getSanitisedConsentCookieValue = (consentCookieValue: string | undefined): string => {
    return consentCookieValue === undefined || consentCookieValue.toLowerCase() !== 'true' ? 'false' : 'true';
};

export function CookieContextProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        setConsentCookieValue(
            COOKIE_CONSENT_NAME,
            getSanitisedConsentCookieValue(getConsentCookieValue(COOKIE_CONSENT_NAME)),
        );
    }, []);

    const sharedState = {
        displayCookieConsentModal: getConsentCookieValue(COOKIE_CONSENT_NAME)?.toLowerCase() !== 'true',
    } as ContextProps;

    return <CookieContext.Provider value={sharedState}>{children}</CookieContext.Provider>;
}

export const useCookieContext = (): ContextProps => useContext(CookieContext);
