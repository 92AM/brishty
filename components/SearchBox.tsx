import React from 'react'
import PageContentWrapper from "./PageContentWrapper";
import SearchForm from "./SearchForm";

const SearchBox = () => {
    return (
        <div className="bg-cover pt-32 h-full bg-landscape">
            <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
                <div className="mx-auto container block bg-gray-800 max-w-5xl rounded-xl shadow-2xl">
                    <span className="block px-3 pt-6 text-center text-gray-200 text-3xl font-extrabold">
                        Find your weather today
                    </span>
                    <span
                        className="block px-3 pt-3 text-center text-lg text-gray-400">
                        Search for your favourite location!
                    </span>
                    <SearchForm/>
                </div>
            </PageContentWrapper>
        </div>
    );
};

export default SearchBox

