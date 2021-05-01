import React from 'react'
import SearchLocation from "./SearchLocation";
import Nav from "./Nav";

const Title = () => {
    return (
        <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="leading-none text-2xl text-black">
                <a className="no-underline text-white hover:underline" href="/">
                    Brishty
                </a>
            </h1>
            <a className="text-black hover:text-orange md:hidden" href="#">
                <i className="fa fa-2x fa-bars"/>
            </a>
        </div>
    );
}

const Header = () => {
    return (
        <header
            className="fixed left-0 right-0 bg-gray-800 border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
            <Title/>
            <SearchLocation/>
            <Nav/>
        </header>
    );
};

export default Header

