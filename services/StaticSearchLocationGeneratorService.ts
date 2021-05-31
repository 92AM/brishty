const topUkCities: string[] = [
    'London, UK',
    'Manchester, UK',
    'Birmingham, UK',
    'Belfast, UK',
    'Edinburgh, UK',
    'Glasgow, UK',
];

const topWorldCities: string[] = [
    'New York',
    'Paris',
    'Moscow',
    'Tokyo',
    'Dubai',
    'Los Angeles',
    'Rome',
    'Madrid',
    'Amsterdam',
];

export const getStaticUkTopSearchLocations = (): string[] => {
    return [
        ...topUkCities,
    ];
};

export const getStaticWorldTopSearchLocations = (): string[] => {
    return [
        ...topWorldCities,
    ];
};