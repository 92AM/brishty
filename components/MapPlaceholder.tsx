import React, { Fragment } from 'react';
import { WEATHER_DETAILS_PAGE_MAP_HEIGHT, WEATHER_DETAILS_PAGE_MAP_WIDTH } from '../utility/constants';
import { MapSize } from '../interfaces';
import { useWindowSize } from '../services/GenericUtilityService';

const slideComponents: any = [];

const maxNoOfPlaceholdersToRender = 5;

for (let i = 1; i <= maxNoOfPlaceholdersToRender; i++) {
    slideComponents.push(
        <div className="p-2 w-60 bg-gray-300 text-gray-100 rounded-2xl">
            <span className="p-1 bg-gray-100 w-56 block h-5">&nbsp;</span>
            <div className="p-1 w-56 block text-xs space-x-5">
                <span className="bg-gray-100 w-32 block h-4">&nbsp;</span>
            </div>
            <div className="p-1 border rounded-full bg-gray-100 w-56">
                <span className="p-1 rounded-full block" />
            </div>
        </div>,
    );
}

const MapLegendPlaceholder = () => {
    return (
        <div className="z-0 bg-gray-100">
            <div className="bg-gray-100 border-b border-gray-100 p-2">
                <div className="max-w-xl mx-auto max-w-screen-xl">
                    <div className="flex overflow-x-scroll p-2 hide-scroll-bar ">
                        <div className="flex flex-nowrap space-x-4">{slideComponents}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

type Props = {
    useFullViewport?: boolean;
};

const MapPlaceholder = ({ useFullViewport: useFullViewport }: Props) => {
    const size: MapSize = useWindowSize();
    return (
        <Fragment>
            <div
                style={{
                    height: useFullViewport && size.height ? size.height : WEATHER_DETAILS_PAGE_MAP_HEIGHT,
                    width: WEATHER_DETAILS_PAGE_MAP_WIDTH,
                }}
                className="z-0 bg-gray-200 border-t border-b border-gray-300"
            />
            <MapLegendPlaceholder />
        </Fragment>
    );
};

export default MapPlaceholder;
