import React, { useState } from 'react';
import { validateAndExecuteSearch } from '../services/SearchService';
import AsyncLocationSearchTypeahead from './AsyncLocationSearchTypeahead';
import { useTypeaheadLocationSearch } from '../services/ApplicationEnvironmentConfigService';

export interface NavSearchProps {
    searchContentNode?: any;
    displayNavSearch: any;
    setDisplayNavSearch: any;
}

const inputItemClassName = 'h-12 w-full p-6 text-xl text-gray-700 leading-tight focus:outline-none';
const menuItemClassName = 'p-4 bg-white text-xl truncate';
const typeAheadClassName = 'bg-gray-900';

const NavSearch = ({ searchContentNode, displayNavSearch, setDisplayNavSearch }: NavSearchProps) => {
    const [input, setInput] = useState('');

    const onSearchFormSubmit = (e: any) => {
        e.preventDefault();
        return;
    };

    const onSearchChange = (e: any) => setInput(e.target.value);

    const handleSearchInputKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            validateAndExecuteSearch(input);
        }
    };

    const handleOnBlurEvent = (e: any) => {
        e.preventDefault();
        input && validateAndExecuteSearch(input);
        setDisplayNavSearch(false);
    };

    const cxSearchInput =
        'w-full text-grey-800 transition focus:outline-none ' +
        'focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl';

    if (displayNavSearch) {
        return (
            <form
                onSubmit={onSearchFormSubmit}
                className="relative w-full bg-white shadow-xl"
                id="search-content"
                ref={searchContentNode}
            >
                <div className="container mx-auto py-3 text-black">
                    {!useTypeaheadLocationSearch() && (
                        <input
                            className={cxSearchInput}
                            id="searchfield"
                            type="search"
                            placeholder="Search by city name ..."
                            value={input}
                            onChange={(e) => onSearchChange(e)}
                            onBlur={(e) => handleOnBlurEvent(e)}
                            onKeyUp={handleSearchInputKeyUp}
                            required
                        />
                    )}
                    {useTypeaheadLocationSearch() && (
                        <AsyncLocationSearchTypeahead
                            inputClassName={inputItemClassName}
                            menuItemClassName={menuItemClassName}
                            typeAheadClassName={typeAheadClassName}
                        />
                    )}
                </div>
            </form>
        );
    } else {
        return null;
    }
};

export default NavSearch;
