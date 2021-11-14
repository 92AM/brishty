/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import React, { useState } from 'react';
import { AsyncTypeahead, Highlighter, TypeaheadMenuProps, TypeaheadResult } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { searchWeatherByGeoLocation } from '../services/SearchService';
import { algoliaPlacesClient } from '../api/AlgoliaPlacesClient';
import { fireGoogleAnalyticsEvent } from '../services/GenericUtilityService';
import { GA_EVENT_SEARCH_TYPE_LOCATION_SEARCH_USING_TYPEAHEAD_AUTOCOMPLETE_ID } from '../utility/constants';

type LocationSearch = {
    [index: string]: string;
    displayableLocation: string;
    searchLocation: string;
    latitude: string;
    longitude: string;
    countryCode: string;
};

type AsyncLocationSearchTypeaheadProps = {
    inputClassName: string;
    menuItemClassName: string;
    typeAheadClassName: string;
};

const EMPTY_STRING = '';
const PLACEHOLDER_TEXT = 'Search for a location...';
const SEARCH_DELAY = 250;
const SHOULD_USE_CACHE = true;

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
        fireGoogleAnalyticsEvent(
            'location-search-using-typeahead-autocomplete',
            'search-type',
            `Location details - locationName : ${selected.searchLocation} | latitude : ${selected.latitude} | longitude : ${selected.longitude} | countryCode : ${selected.countryCode}`,
            GA_EVENT_SEARCH_TYPE_LOCATION_SEARCH_USING_TYPEAHEAD_AUTOCOMPLETE_ID,
        );
    }
};

const AsyncLocationSearchTypeahead = ({
    inputClassName,
    menuItemClassName,
    typeAheadClassName,
}: AsyncLocationSearchTypeaheadProps) => {
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
        <AsyncTypeahead
            inputProps={{
                className: inputClassName,
            }}
            filterBy={() => true}
            className={typeAheadClassName}
            id="async-typeahead-location-search"
            isLoading={isLoading}
            labelKey={labelKey}
            minLength={3}
            onSearch={handleSearch}
            promptText={EMPTY_STRING}
            searchText={EMPTY_STRING}
            delay={SEARCH_DELAY}
            useCache={SHOULD_USE_CACHE}
            options={options}
            placeholder={PLACEHOLDER_TEXT}
            onMenuToggle={() => {}}
            onChange={(selected: LocationSearch[]) => {
                if (selected && selected.length === 1) {
                    onSelected(selected[0]);
                }
            }}
            renderMenuItemChildren={(
                option: TypeaheadResult<LocationSearch>,
                props: TypeaheadMenuProps<LocationSearch>,
            ) => (
                <div className={menuItemClassName}>
                    <Highlighter search={props.text ? props.text : EMPTY_STRING}>
                        {option[String(props.labelKey)]}
                    </Highlighter>
                </div>
            )}
        />
    );
};

export default AsyncLocationSearchTypeahead;
