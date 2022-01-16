declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export const getWindow = (): Window => window;

export const getDocument = (): Document => document;
