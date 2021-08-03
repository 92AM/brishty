import React from 'react';

type Props = {
  item: string;
};

const HomePageRegionHeader = ({ item: regionHeaderText }: Props) => {
  const locationTitleContent =
    regionHeaderText == 'World'
      ? 'Rest of the ' + regionHeaderText + ' forecasts'
      : 'Top ' + regionHeaderText + ' forecasts';

  return (
    <div className="text-black p-2 text-2xl text-center">
      {locationTitleContent}
    </div>
  );
};

export default HomePageRegionHeader;
