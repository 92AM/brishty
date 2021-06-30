const topUkCities: string[] = [
    'London, UK',
    'Manchester, UK',
    'Birmingham, UK',
    'Belfast, UK',
    'Edinburgh, UK',
    'Glasgow, UK',
];

const topEuropeanCities: string[] = [
    'Paris',
    'Moscow',
    'Rome',
    'Madrid',
    'Amsterdam',
    'Prague',
];

const topAsianCities: string[] = [
    'Shanghai',
    'Dubai',
    'Beijing',
    'Delhi',
    'Seoul',
    'Tokyo',
];

const topAmericasCities: string[] = [
    'Sao Paulo',
    'New York',
    'Chicago',
    'Mexico City',
    'Buenos Aires',
    'Los Angeles',
];

const topAfricaCities: string[] = [
    'Cape Town',
    'Nairobi',
    'Lagos',
    'Johannesburg',
    'Addis Ababa',
    'Cairo',
];

const moreTopEuropeanCities: string[] = [
    'Milan',
    'Barcelona',
    'London',
    'Istanbul',
    'Brussels',
    'Zurich',
    'Reykjavik',
    'Berlin',
    'Vienna',
    'Lisbon',
    'Budapest',
    'Athens',
    'Venice',
    'Copenhagen',
    'Edinburgh',
];

const moreTopUkCities: string[] = [
    'Liverpool, UK',
    'Coventry, UK',
    'Cornwall, UK',
    'Leeds, UK',
    'Kent, UK',
    'Milton Keynes, UK',
    'Newcastle Upon Tyne, UK',
    'Bristol, UK',
    'Cambridge, UK',
    'Nottingham, UK',
    'Sheffield, UK',
    'Leicester, UK',
    'Oxford, UK',
    'Cardiff, UK',
    'Bath, UK',
];

const moreTopAsianCities: string[] = [
    'Hong Kong',
    'Bangkok',
    'Chennai',
    'Singapore',
    'Ho Chi Minh City',
    'Abu Dhabi',
    'Dhaka',
    'Osaka',
    'Lahore',
    'Karachi',
    'Kolkata',
    'Bengaluru',
    'Yangon',
    'Mumbai',
    'Jakarta',
];

const moreTopAmericasCities: string[] = [
    'Lima',
    'Bogota',
    'Rio de Janeiro',
    'Santiago',
    'Salvador',
    'Toronto',
    'Fortaleza',
    'Medellin',
    'Cali',
    'Houston',
    'Brasilia',
    'Montreal',
    'Phoenix',
    'Philadelphia',
    'Guadalajara',
];

const moreTopAfricaCities: string[] = [
    'Kinshasa',
    'Giza',
    'Alexandria',
    'Dar es Salaam',
    'Casablanca',
    'Accra',
    'Durban',
    'Kano',
    'Tripoli',
    'Algiers',
    'Mogadishu',
    'Mombasa',
    'Harare',
    'Antananarivo',
    'Tunis',
];

export const getStaticUkTopSearchLocations = (): string[] => {
    return [
        ...topUkCities,
    ];
};

export const getStaticEuropeanTopSearchLocations = (): string[] => {
    return [
        ...topEuropeanCities,
    ];
};

export const getStaticAsianTopSearchLocations = (): string[] => {
    return [
        ...topAsianCities,
    ];
};

export const getStaticAmericasTopSearchLocations = (): string[] => {
    return [
        ...topAmericasCities,
    ];
};

export const getStaticAfricaTopSearchLocations = (): string[] => {
    return [
        ...topAfricaCities,
    ];
};

export const getMoreStaticEuropeanTopSearchLocations = (): string[] => {
    return [
        ...topEuropeanCities,
        ...moreTopEuropeanCities,
    ];
};

export const getMoreStaticUkTopSearchLocations = (): string[] => {
    return [
        ...topUkCities,
        ...moreTopUkCities,
    ];
};

export const getMoreStaticAsianTopSearchLocations = (): string[] => {
    return [
        ...topAsianCities,
        ...moreTopAsianCities,
    ];
};

export const getMoreStaticAmericasTopSearchLocations = (): string[] => {
    return [
        ...topAmericasCities,
        ...moreTopAmericasCities,
    ];
};

export const getMoreStaticAfricaTopSearchLocations = (): string[] => {
    return [
        ...topAfricaCities,
        ...moreTopAfricaCities,
    ];
};