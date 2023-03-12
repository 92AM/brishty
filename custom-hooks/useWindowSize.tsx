import { MapSize } from '../interfaces';
import { useEffect, useState } from 'react';
import { getWindow } from '../services/BrowserService';

export const useWindowSize = (): MapSize => {
    const [windowSize, setWindowSize] = useState<MapSize>({
        height: 0,
    });

    const calculateWindowHeightValueForMap = (windowHeight: number): number => {
        return windowHeight <= 500
            ? windowHeight - (windowHeight / 100) * 40
            : windowHeight - (windowHeight / 100) * 25;
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                height: calculateWindowHeightValueForMap(getWindow().innerHeight),
            });
        };
        getWindow().addEventListener('resize', handleResize);
        handleResize();
        return () => getWindow().removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};
