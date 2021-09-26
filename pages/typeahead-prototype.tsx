/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import React, { useState } from 'react';
import { AsyncTypeahead, Highlighter, TypeaheadMenuProps, TypeaheadResult } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';
import { searchWeatherByGeoLocation } from '../services/SearchService';
import { algoliaPlacesClient } from '../api/AlgoliaPlacesClient';

type LocationSearch = {
    [index: string]: string;
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

const onDeselect = () => {
    return '';
};

const onSelected = (selected: LocationSearch) => {
    // onChange is called when deselected

    if (!selected || !selected.displayableLocation) {
        onDeselect();
    } else {
        searchWeatherByGeoLocation(
            selected.searchLocation,
            selected.latitude,
            selected.longitude,
            selected.countryCode,
        );
    }
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

    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-28 pb-5 min-h-screen'}>
                <AsyncTypeahead
                    inputProps={{
                        className: 'h-16 w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none',
                    }}
                    filterBy={() => true}
                    className={'bg-gray-900'}
                    id="async-example"
                    isLoading={isLoading}
                    labelKey={labelKey}
                    minLength={0}
                    onSearch={handleSearch}
                    delay={5}
                    useCache={false}
                    options={options}
                    placeholder="Search for a location..."
                    clearButton
                    emptyLabel=""
                    onChange={(selected: LocationSearch[]) => {
                        if (selected && selected.length === 1) {
                            onSelected(selected[0]);
                        }
                    }}
                    renderMenuItemChildren={(
                        option: TypeaheadResult<LocationSearch>,
                        props: TypeaheadMenuProps<LocationSearch>,
                    ) => (
                        <div className={'p-2 bg-gray-200 text-base'}>
                            <Highlighter search={props.text ? props.text : ''}>
                                {option[String(props.labelKey)]}
                            </Highlighter>
                        </div>
                    )}
                />
            </PageContentWrapper>
        </Layout>
    );
};

export default TypeaheadPrototype;
