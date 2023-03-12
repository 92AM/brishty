import { setPageModel } from '../PageModelService';

describe('PageModelService', () => {
    it('should populate window.PAGE_MODEL', async () => {
        setPageModel({ blah: 'some value' });

        expect(window.PAGE_MODEL).toEqual({ blah: 'some value' });
    });
});
