import React, { Fragment } from 'react';
import {
    WEATHER_DETAILS_PAGE_MAP_HEIGHT,
    WEATHER_DETAILS_PAGE_MAP_WIDTH,
    WEATHER_MAP_LEGEND_HEIGHT,
    WEATHER_MAP_LEGEND_WIDTH,
} from '../utility/constants';

const slideComponents: any = [];

for (let i = 0; i < 5; i++) {
    slideComponents.push(
        <div className="p-2 w-60 bg-gray-300 text-gray-100 rounded-2xl">
            <span className="p-1 bg-gray-100 block w-56">&nbsp;</span>
            <div className="p-1 w-56 block text-xs space-x-5">
                <span className="bg-gray-100 block w-32">&nbsp;</span>
            </div>
            <div className="p-1 border rounded-full bg-gray-100 w-56">
                <span className="p-1 rounded-full block" />
            </div>
        </div>,
    );
}

const MapPlaceholder = () => {
    return (
        <Fragment>
            <div
                style={{
                    height: WEATHER_DETAILS_PAGE_MAP_HEIGHT,
                    width: WEATHER_DETAILS_PAGE_MAP_WIDTH,
                }}
                className="bg-gray-200"
            />
            <div
                style={{
                    height: WEATHER_MAP_LEGEND_HEIGHT,
                    width: WEATHER_MAP_LEGEND_WIDTH,
                }}
                className="bg-gray-200"
            >
                <div className="bg-gray-200 border-b border-gray-100 p-2">
                    <div className="max-w-xl mx-auto max-w-screen-xl">
                        <div className="flex overflow-x-scroll p-2 hide-scroll-bar ">
                            <div className="flex flex-nowrap space-x-6">{slideComponents}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MapPlaceholder;
