import React, { useState } from 'react';
import { AsyncTypeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import { algoliaPlacesClient } from '../api/AlgoliaPlacesClient';
import { searchWeatherByGeoLocation } from '../services/SearchService';

type LocationSearch = {
    displayableLocation: string;
    searchLocation: string;
    latitude: string;
    longitude: string;
    countryCode: string;
};

const getLocationDetails = (hits: any) => {
    return hits.map(
        (hit: any) =>
            ({
                displayableLocation: hit.locale_names[0] + ', ' + hit.administrative[0] + ', ' + hit.country,
                searchLocation: hit.locale_names[0],
                latitude: hit._geoloc.lat,
                longitude: hit._geoloc.lng,
                countryCode: hit.country_code,
            } as LocationSearch),
    );
};

const TypeaheadPrototype = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (query: string) => {
        setIsLoading(true);

        algoliaPlacesClient(query)
            .then((resp) => resp.json())
            .then(({ hits }) => {
                const options = getLocationDetails(hits);
                setOptions(options);
                setIsLoading(false);
            });
    };

    const labelKey: any = 'displayableLocation';

    const handleSearchInputKeyUp = (e: any, each: LocationSearch) => {
        if (e.keyCode === 13) {
            searchWeatherByGeoLocation(each.searchLocation, each.latitude, each.longitude, each.countryCode);
        }
    };

    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-5 min-h-screen'}>
                <AsyncTypeahead
                    inputProps={{
                        className: 'h-16 w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none',
                    }}
                    filterBy={() => true}
                    className={'bg-gray-900'}
                    id="async-example"
                    isLoading={isLoading}
                    labelKey={labelKey}
                    minLength={4}
                    onSearch={handleSearch}
                    delay={100}
                    useCache={true}
                    options={options}
                    placeholder="Search for a location..."
                    clearButton
                    // onChange={() => searchWeatherByGeoLocation(each.searchLocation, each.latitude, each.longitude, each.countryCode)}
                    renderMenu={(option, props) => (
                        <Menu {...props}>
                            {option.map((each: LocationSearch, index) => (
                                <div key={index} className={'flex flex-col'}>
                                    <MenuItem
                                        className={'p-2'}
                                        onClick={() =>
                                            searchWeatherByGeoLocation(
                                                each.searchLocation,
                                                each.latitude,
                                                each.longitude,
                                                each.countryCode,
                                            )
                                        }
                                        onChange={() => console.log('onChange ...')}
                                        onBlur={() => console.log('onBlur ...')}
                                        onKeyUp={(e) => handleSearchInputKeyUp(e, each)}
                                        onSelect={() => console.log('onChange ...')}
                                        option={each}
                                        position={index}
                                        key={index}
                                    >
                                        {each.displayableLocation}
                                    </MenuItem>
                                </div>
                            ))}
                        </Menu>
                    )}
                />
            </PageContentWrapper>
        </Layout>
    );
};

export default TypeaheadPrototype;
