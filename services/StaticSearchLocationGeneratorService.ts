const topUkCities: string[] = [
    'London, GB',
    'Manchester, GB',
    'Birmingham, GB',
    'Belfast, GB',
    'Edinburgh, GB',
    'Glasgow, GB',
];

const topEuropeanCities: string[] = [
    'Paris, FR',
    'Moscow, RU',
    'Rome, IT',
    'Madrid, ES',
    'Amsterdam, NL',
    'Prague, CZ',
];

const topAsianCities: string[] = [
    'Shanghai, CN',
    'Dubai, AE',
    'Beijing, CN',
    'Delhi, IN',
    'Seoul, KR',
    'Tokyo, JP',
];

const topRestOfTheWorldCities: string[] = [
    'Shanghai, CN',
    'Dubai, AE',
    'New York, US',
    'Los Angeles, US',
    'Chicago, US',
    'Tokyo, JP',
];

const topAmericasCities: string[] = [
    'Chicago, US',
    'Sao Paulo, BR',
    'New York, US',
    'Mexico City, MX',
    'Buenos Aires, AR',
    'Los Angeles, US'
];

const topAfricaCities: string[] = [
    'Cape Town, ZA',
    'Nairobi, KE',
    'Lagos, NG',
    'Johannesburg, ZA',
    'Addis Ababa, ET',
    'Cairo, EG',
];

const moreTopEuropeanCities: string[] = [
    'Milan, IT',
    'Barcelona, ES',
    'London, GB',
    'Istanbul, TR',
    'Brussels, BE',
    'Zurich, CH',
    'Reykjavik, IS',
    'Berlin, DE',
    'Vienna, AT',
    'Lisbon, PT',
    'Budapest, Romania',
    'Athens, GR',
    'Venice, IT',
    'Copenhagen, DK',
    'Edinburgh, GB',
];

const moreTopUkCities: string[] = [
    'Liverpool, GB',
    'Coventry, GB',
    'Cornwall, GB',
    'Leeds, GB',
    'Kent, GB',
    'Milton Keynes, GB',
    'Newcastle Upon Tyne, GB',
    'Bristol, GB',
    'Cambridge, GB',
    'Nottingham, GB',
    'Sheffield, GB',
    'Leicester, GB',
    'Oxford, GB',
    'Cardiff, GB',
    'Bath, GB',
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

export const getStaticRestOfWorldTopSearchLocations = (): string[] => {
    return [
        ...topRestOfTheWorldCities,
    ];
};

export const getMoreStaticWorldTopSearchLocations = (): string[] => {
    return [
        ...topAsianCities,
        ...moreTopAsianCities,
        ...topAfricaCities,
        ...topAmericasCities,
        // ...moreTopAmericasCities
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