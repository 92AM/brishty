import * as BrowserService from '../BrowserService';
import { getDocument, getWindow } from '../BrowserService';

describe('BrowserService', () => {
    const window = {
        name: 'this is a window',
    } as Window;

    const document = {
        title: 'this is a document',
    } as Document;

    beforeAll(() => {
        jest.spyOn(BrowserService, 'getWindow').mockReturnValue(window);
        jest.spyOn(BrowserService, 'getDocument').mockReturnValue(document);
    });

    it('test get window', () => {
        expect(getWindow()).toEqual({
            name: 'this is a window',
        });
    });

    it('test get document', () => {
        expect(getDocument()).toEqual({
            title: 'this is a document',
        });
    });
});
