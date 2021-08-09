import React from 'react';
import CSS from 'csstype';

const WindIndex = () => {
    const windGradientStyle: CSS.Properties = {
        background:
            'linear-gradient(to left, ' +
            'rgb(158, 128, 177), ' +
            'rgba(116, 76, 172, 0.9), ' +
            'rgb(164, 123, 170), ' +
            'rgba(170, 128, 177, 0.84), ' +
            'rgba(176, 128, 177, 0.71), ' +
            'rgba(170, 128, 177, 0.54), ' +
            'rgba(170, 128, 177, 0.44), ' +
            'rgba(255, 255, 0, 0))',
    };

    return (
        <div className="p-2 w-60 bg-gray-800 text-gray-100 rounded-2xl">
            <span className="p-1 text-sm">Wind speed, m/s</span>
            <div className="pl-2 p-1 w-56 block text-xs space-x-4">
                <span>0</span>
                <span>2</span>
                <span>3</span>
                <span>6</span>
                <span>12</span>
                <span>25</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div className="p-1 border rounded-full bg-white w-56">
                <span style={windGradientStyle} className="p-1 rounded-full block" />
            </div>
        </div>
    );
};

const TemperatureIndex = () => {
    const temperatureGradientStyle: CSS.Properties = {
        background:
            'linear-gradient(to right, ' +
            'rgb(159, 85, 181) 0%, ' +
            'rgb(44, 106, 187) 8.75%, ' +
            'rgb(82, 139, 213) 12.5%, ' +
            'rgb(103, 163, 222) 18.75%, ' +
            'rgb(142, 202, 240) 25%, ' +
            'rgb(155, 213, 244) 31.25%, ' +
            'rgb(172, 225, 253) 37.5%, ' +
            'rgb(194, 234, 255) 43.75%, ' +
            'rgb(255, 255, 208) 50%, ' +
            'rgb(254, 248, 174) 56.25%, ' +
            'rgb(254, 232, 146) 62.5%, ' +
            'rgb(254, 226, 112) 68.75%, ' +
            'rgb(253, 212, 97) 75%, ' +
            'rgb(244, 168, 94) 82.5%, ' +
            'rgb(244, 129, 89) 87.5%, ' +
            'rgb(244, 104, 89) 93.75%, ' +
            'rgb(244, 76, 73) 100%)',
    };

    return (
        <div className="p-2 w-60 bg-gray-800 text-gray-100 rounded-2xl">
            <span className="p-1 text-sm">Temperature, °C</span>
            <div className="pl-2 p-1 w-56 block text-xs space-x-8">
                <span>-40</span>
                <span>-20</span>
                <span>0</span>
                <span>20</span>
                <span>40</span>
            </div>
            <div className="p-1 border rounded-full bg-white w-56">
                <span style={temperatureGradientStyle} className="p-1 rounded-full block" />
            </div>
        </div>
    );
};

const PressureIndex = () => {
    const pressureGradientStyle: CSS.Properties = {
        background:
            'linear-gradient(to right, ' +
            'rgb(0, 115, 255) 0%, ' +
            'rgb(0, 170, 255) 8.35059%, ' +
            'rgb(75, 208, 214) 24.9192%, ' +
            'rgb(141, 231, 199) 41.4879%, ' +
            'rgb(176, 247, 32) 49.7722%, ' +
            'rgb(240, 184, 0) 58.0565%, ' +
            'rgb(251, 85, 21) 74.6251%, ' +
            'rgb(243, 54, 59) 91.1938%, ' +
            'rgb(198, 0, 0) 100%)',
    };

    return (
        <div className="p-2 w-60 bg-gray-800 text-gray-100 rounded-2xl">
            <span className="p-1 text-sm">Pressure, hPa</span>
            <div className="pl-2 p-1 w-56 block text-xs space-x-9">
                <span>950</span>
                <span>980</span>
                <span>1010</span>
                <span>1040</span>
                <span>1070</span>
            </div>
            <div className="p-1 border rounded-full bg-white w-56">
                <span style={pressureGradientStyle} className="p-1 rounded-full block" />
            </div>
        </div>
    );
};

const CloudIndex = () => {
    const cloudGradientStyle: CSS.Properties = {
        background:
            'linear-gradient(to right, ' +
            'rgba(247, 247, 255, 0) 0%, ' +
            'rgba(251, 247, 255, 0) 10%, ' +
            'rgba(244, 248, 255, 0.1) 20%, ' +
            'rgba(240, 249, 255, 0.2) 30%, ' +
            'rgba(221, 250, 255, 0.4) 40%, ' +
            'rgba(224, 224, 224, 0.9) 50%, ' +
            'rgba(224, 224, 224, 0.76) 60%, ' +
            'rgba(228, 228, 228, 0.9) 70%, ' +
            'rgba(232, 232, 232, 0.9) 80%, ' +
            'rgb(214, 213, 213) 90%, ' +
            'rgb(210, 210, 210) 95%, ' +
            'rgb(183, 183, 183) ' +
            '100%)',
    };

    return (
        <div className="p-2 w-60 bg-gray-800 text-gray-100 rounded-2xl">
            <span className="p-1 text-sm">Clouds, %</span>
            <div className="pl-3 p-1 w-56 block text-xs space-x-8">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
            </div>
            <div className="p-1 border rounded-full bg-white w-56">
                <span style={cloudGradientStyle} className="p-1 rounded-full block" />
            </div>
        </div>
    );
};

const PrecipitationIndex = () => {
    const precipitationGradientStyle: CSS.Properties = {
        background:
            'linear-gradient(to left, ' +
            'rgba(20, 20, 255, 0.9), ' +
            'rgba(80,80, 225, 0.7), ' +
            'rgba(110, 110, 205, 0.3), ' +
            'rgba(120, 120, 190, 0), ' +
            'rgba(150, 150, 170, 0), ' +
            'rgba(200, 150, 150, 0), ' +
            'rgba(225, 200, 100, 0))',
    };

    return (
        <div className="p-2 w-60 bg-gray-800 text-gray-100 rounded-2xl">
            <span className="p-1 text-sm">Precipitation, mm</span>
            <div className="p-1 w-56 block text-xs space-x-5">
                <span>0</span>
                <span>0.1</span>
                <span>0.2</span>
                <span>0.5</span>
                <span>1</span>
                <span>10</span>
                <span>140</span>
            </div>
            <div className="p-1 border rounded-full bg-white w-56">
                <span style={precipitationGradientStyle} className="p-1 rounded-full block" />
            </div>
        </div>
    );
};

const WeatherMapLegend = () => {
    const slideComponents: any = [];

    slideComponents.push(<TemperatureIndex />);
    slideComponents.push(<CloudIndex />);
    slideComponents.push(<PrecipitationIndex />);
    slideComponents.push(<PressureIndex />);
    slideComponents.push(<WindIndex />);

    return (
        <div className="z-0 bg-gray-100 border-b border-gray-100 p-2">
            <div className="max-w-xl mx-auto max-w-screen-xl">
                <div className="flex overflow-x-scroll p-2 hide-scroll-bar ">
                    <div className="flex flex-nowrap space-x-4">{slideComponents}</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherMapLegend;
