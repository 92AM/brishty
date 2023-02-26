import React from 'react';

type HomePageRegionHeaderProps = {
    item: string;
};

const HomePageRegionHeader = ({ item: regionHeaderText }: HomePageRegionHeaderProps) => {
    const locationTitleContent =
        regionHeaderText == 'World'
            ? 'Rest of the ' + regionHeaderText + ' forecasts'
            : 'Top ' + regionHeaderText + ' forecasts';

    return <div className="text-black p-2 text-3xl text-center">{locationTitleContent}</div>;
};

export default HomePageRegionHeader;
