import React from "react";

type Props = {
    description: string
    value: string
}

const WeatherDescriptionItem = ({description, value}: Props) => {
    return (
        <div className="flex flex-col py-2">
            <span className="py-2 text-gray-400">
                {description}
            </span>
            <h3 className="items-center justify-center text-lg leading-6 font-medium h-12 text-white pt-2">
                {value}
            </h3>
        </div>
    );
};

export default WeatherDescriptionItem;