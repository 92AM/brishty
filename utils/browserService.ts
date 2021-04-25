export interface ExtendedWindow extends Window {
}

export const getWindow = (): ExtendedWindow => window;

export const getDocument = (): Document => document;
