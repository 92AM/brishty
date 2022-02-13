import Cookies from 'js-cookie';

export const setConsentCookieValue = (name: string, value: string): void => {
    Cookies.set(name, value);
};

export const getConsentCookieValue = (name: string): string | undefined => {
    return Cookies.get(name);
};
