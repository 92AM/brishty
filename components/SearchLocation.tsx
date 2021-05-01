import React, {useState} from 'react';
import {getWindow} from "../services/BrowserService";

const searchWeatherByLocation = (input: any) => {
    const windowLocation = getWindow().location;
    windowLocation.assign('/weather/' + input);
}

const SearchLocation = () => {
    const [input, setInput] = useState('');

    const onSearchChange = (e: any) => {
        setInput(e.target.value);
    };

    const onSearchSubmit = (e: any) => {
        e.preventDefault();
        try {
            if (!input) {
                throw "An error occurred, please insert a valid city name and search again."
            } else {
                searchWeatherByLocation(input)
            }
        } catch (err) {
            alert(err);
            console.log(err);
        }
    };

    return (
        <form onSubmit={onSearchSubmit} className="mb-4 w-full md:mb-0 md:w-2/5">
            <div className="p-1">
                <div className="bg-white flex items-center rounded-full shadow-xl divide-x">
                    <input
                        className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                        type="search"
                        placeholder="City name"
                        value={input}
                        onChange={onSearchChange}
                        required
                    />
                    <button className="flex items-center px-4 py-2 text-black hover:bg-teal-400"
                            onClick={onSearchSubmit}>
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchLocation
