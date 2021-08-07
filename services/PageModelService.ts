import { getWindow } from './BrowserService';

declare global {
    interface Window {
        PAGE_MODEL: any | any[];
    }
}

export const setPageModel = (pageModel: any | any[]): void => {
    getWindow().PAGE_MODEL = pageModel;
};
