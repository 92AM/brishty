export const convertKelvinToCelsius = (kelvin: number): string => {
    return `${Math.round(kelvin - 273.15)}°`;
};