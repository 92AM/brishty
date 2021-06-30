import React from 'react'

type Props = {
    item: String
}

const HomePageRegionHeader = ({item: regionHeaderText}: Props) => {
    const locationTitleContent = "Top " + regionHeaderText + " forecasts";
    return (
        <div className="text-black p-2 text-2xl text-center">
            {locationTitleContent}
        </div>
    );
};

export default HomePageRegionHeader

