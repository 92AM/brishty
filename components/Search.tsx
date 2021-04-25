import React, {useState} from 'react';
import {getWindow} from "../utils/browserService";

const searchWeatherByLocation = (input: any) => {
    const windowLocation = getWindow().location;
    windowLocation.assign(windowLocation + 'weather/' + input);
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
        <form onSubmit={onSearchSubmit} className="">
            <div className="">
                <input
                    className="form-control"
                    type="search"
                    placeholder="City name"
                    value={input}
                    onChange={onSearchChange}
                    required
                />
                <button className="" type="button" onClick={onSearchSubmit}>
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchLocation
