import React from 'react'
import SearchLocation from "./SearchLocation";

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

const exampleWeatherApiExample: string = "/api/weather?location=london";

const Nav = () => {
    return (
        <nav>
            <ul className="list-reset md:flex md:items-center md:space-x-10">
                <li>
                    <a className="block no-underline hover:underline py-2 text-white md:border-none md:p-0"
                       href={exampleWeatherApiExample}>
                        API Example
                    </a>
                </li>
                <li>
                    <a className="border-t block no-underline hover:underline py-2 text-white md:border-none md:p-0"
                       href="#">
                        About
                    </a>
                </li>
                <li>
                    <a className="border-t block no-underline hover:underline py-2 text-white md:border-none md:p-0"
                       href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

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

