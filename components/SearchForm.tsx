import React, { useState } from 'react';
import { getWindow } from '../services/BrowserService';
import Cookies from 'js-cookie';
import AsyncLocationSearchTypeahead from './AsyncLocationSearchTypeahead';

const searchWeatherByLocation = (input: any) => {
    const windowLocation = getWindow().location;
    windowLocation.assign('/weather/' + input);
};

const useTypeaheadLocationSearchCookieValue: boolean =
    Cookies.get('use-typeahead-location-search')?.toLowerCase() == 'true';

const inputItemClassName =
    'border-b-2 rounded-sm h-14 w-full p-6 text-xl text-gray-700 leading-tight focus:outline-none';
const menuItemClassName = 'p-6 bg-white text-xl truncate';

const SearchForm = () => {
    const [input, setInput] = useState('');

    const onSearchChange = (e: any) => {
        setInput(e.target.value);
    };

    const onSearchSubmit = (e: any) => {
        e.preventDefault();
        try {
            if (!input) {
                throw new Error('Please insert a valid city name and search again.');
            } else {
                searchWeatherByLocation(input);
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <form onSubmit={onSearchSubmit} className="pt-6 px-6 md:px-10 pb-10 mb-4 w-full">
            <div className="p-1">
                {!useTypeaheadLocationSearchCookieValue && (
                    <div className="bg-white flex items-center rounded-full shadow-xl divide-x">
                        <input
                            className="rounded-l-full h-16 w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                            type="search"
                            placeholder="City name"
                            value={input}
                            onChange={onSearchChange}
                            required
                        />
                        <button
                            className="flex items-center px-4 py-2 text-gray-800 hover:bg-teal-400 text-lg md:text-xl"
                            onClick={onSearchSubmit}
                        >
                            Search
                        </button>
                    </div>
                )}
                {useTypeaheadLocationSearchCookieValue && (
                    <div className="bg-white items-center shadow-xl divide-x">
                        <AsyncLocationSearchTypeahead
                            inputClassName={inputItemClassName}
                            menuItemClassName={menuItemClassName}
                        />
                    </div>
                )}
            </div>
        </form>
    );
};

export default SearchForm;
