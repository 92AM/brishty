import { act, renderHook } from '@testing-library/react-hooks';
import { getWindow } from '../../services/BrowserService';
import { useWindowSize } from '../useWindowSize';

const setJestWindowDimensions = (innerHeight: number, innerWidth: number) => {
    Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: innerHeight,
    });

    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: innerWidth,
    });
};

describe('useWindowSize', () => {
    const defaultWindowWidthForTest = 1024;

    afterEach(() => jest.resetAllMocks());

    it('should calculate window height correctly for map when height is greater than 500', async () => {
        const heightGreaterThan500 = 750;
        setJestWindowDimensions(heightGreaterThan500, defaultWindowWidthForTest);
        const expectedResizedWindowHeightPostCalculation = 562.5;

        const { result } = renderHook(() => useWindowSize());

        expect(result.current.height).toEqual(expectedResizedWindowHeightPostCalculation);
    });

    it('should calculate window height correctly for map when height is less than 501', async () => {
        const heightLessThan501 = 450;
        setJestWindowDimensions(heightLessThan501, defaultWindowWidthForTest);
        const expectedResizedWindowHeightPostCalculation = 270;

        const { result } = renderHook(() => useWindowSize());

        expect(result.current.height).toEqual(expectedResizedWindowHeightPostCalculation);
    });

    it('should calculate window height correctly for map after dynamic resizing', async () => {
        const heightLessThan801ButGreaterThan500 = 750;
        setJestWindowDimensions(heightLessThan801ButGreaterThan500, defaultWindowWidthForTest);

        const { result: resultBeforeResize } = renderHook(() => useWindowSize());

        expect(resultBeforeResize.current.height).toEqual(562.5);

        // Resize window height

        const resizeHeightTo = 650;
        const expectedResizedWindowHeightPostCalculation = 487.5;
        (getWindow().innerHeight as any) = resizeHeightTo;

        const { result: resultAfterResize } = renderHook(() => useWindowSize());

        act(() => {
            getWindow().dispatchEvent(new Event('resize'));
        });

        expect(resultAfterResize.current.height).toEqual(expectedResizedWindowHeightPostCalculation);
    });
});
