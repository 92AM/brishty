const topUkCities: string[] = [
    'London, UK',
    'Manchester, UK',
    'Birmingham, UK',
    'Belfast, UK',
    'Edinburgh, UK',
    'Glasgow, UK',
];

export const getStaticUkTopSearchLocations = (): string[] => {
    return [
        ...topUkCities,
    ];
};
