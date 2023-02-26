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

const topAsianCities: string[] = ['Shanghai, CN', 'Dubai, AE', 'Beijing, CN', 'Delhi, IN', 'Seoul, KR', 'Tokyo, JP'];

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
    'Los Angeles, US',
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

export const UK_TOP_SEARCH_LOCATIONS = [...topUkCities];

export const EUROPEAN_TOP_SEARCH_LOCATIONS = [...topEuropeanCities];

export const REST_OF_WORLD_TOP_SEARCH_LOCATIONS = [...topRestOfTheWorldCities];

export const MORE_WORLD_TOP_SEARCH_LOCATIONS = [
    ...topAsianCities,
    ...moreTopAsianCities,
    ...topAfricaCities,
    ...topAmericasCities,
];

export const MORE_EUROPEAN_TOP_SEARCH_LOCATIONS = [...topEuropeanCities, ...moreTopEuropeanCities];

export const MORE_UK_TOP_SEARCH_LOCATIONS = [...topUkCities, ...moreTopUkCities];
