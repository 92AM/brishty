import React, { useEffect, useRef, useState } from 'react';
import NavSearch from './NavSearch';
import { getDocument } from '../services/BrowserService';
import { BurgerMenuSvg, CloseSvg, SearchIconSvg } from './SvgFactory';

const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuState] = useState(false);
    const [displayNavSearch, setDisplayNavSearch] = useState(false);
    const [clickedOnSearchForm, setClickedOnSearchFormState] = useState(false);
    const searchContentNode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getDocument().addEventListener('mousedown', checkIfSearchContentIsClicked);
        return () => {
            getDocument().removeEventListener('mousedown', checkIfSearchContentIsClicked);
        };
    }, []);

    const checkIfSearchContentIsClicked = (e: any) => {
        if (searchContentNode && searchContentNode.current && searchContentNode.current.contains(e.target)) {
            setClickedOnSearchFormState(true);
            return;
        }
        setClickedOnSearchFormState(false);
    };

    const handleBurgerMenuOnClickEvent = () => {
        isBurgerMenuOpen ? setBurgerMenuState(false) : setBurgerMenuState(true);
    };

    const handleSearchButtonOnClickEvent = () => {
        displayNavSearch ? setDisplayNavSearch(false) : setDisplayNavSearch(true);
    };

    const handleSearchButtonOnBlurEvent = (e: any) => {
        e.preventDefault();
        if (clickedOnSearchForm) {
            return;
        }
        setDisplayNavSearch(false);
    };

    let cxNavBarLinks =
        'w-full flex-grow lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto lg:block mt-2 lg:mt-0 z-20';
    cxNavBarLinks = isBurgerMenuOpen ? cxNavBarLinks : cxNavBarLinks + ' hidden';

    const SearchControlButton = () => {
        return (
            <button
                id="search-toggle"
                className="search-icon cursor-pointer ml-4 pl-6 pr-6"
                onClick={handleSearchButtonOnClickEvent}
                onBlur={(e) => handleSearchButtonOnBlurEvent(e)}
            >
                {!displayNavSearch && (
                    <SearchIconSvg
                        viewBox={'0 0 20 20'}
                        className={'fill-current pointer-events-none text-white w-4 h-4 inline'}
                    />
                )}
                {displayNavSearch && (
                    <CloseSvg
                        viewBox={'0 0 24 24'}
                        className={'fill-current pointer-events-none text-white w-4 h-4 inline'}
                    />
                )}
            </button>
        );
    };

    const MenuControlButton = () => {
        return (
            <button
                id="nav-toggle"
                className="block lg:hidden flex items-center px-3 py-2 border rounded text-white
                                border-grey-dark hover:text-gray-300 hover:border-purple appearance-none
                                focus:outline-none"
                onClick={handleBurgerMenuOnClickEvent}
            >
                <BurgerMenuSvg
                    isBurgerMenuOpen={isBurgerMenuOpen}
                    className={'fill-current h-3 w-3'}
                    viewBox={'0 0 22 22'}
                />
            </button>
        );
    };

    return (
        <nav id="header" className="fixed w-full z-50">
            <div className="relative w-full z-50 fixed top-0 bg-gray-800 border-b border-grey-light">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                    <div className="pl-4 flex items-center">
                        <a href={'/'}>
                            <img
                                className="object-contain object-center w-9 h-9 md:w-11 md:h-11"
                                src="/images/brishty-logos/B-logos_white.png"
                                alt="logo"
                                loading={'lazy'}
                            />
                        </a>
                        <a
                            className="pl-7 text-white text-base no-underline hover:underline font-extrabold text-xl"
                            href="/"
                        >
                            Brishty
                        </a>
                        <SearchControlButton />
                    </div>
                    <div className="pr-4">
                        <MenuControlButton />
                    </div>
                    <div className={cxNavBarLinks} id="nav-content">
                        <ul className="list-reset lg:flex justify-end items-center">
                            <li className="mr-3 py-2 lg:py-0">
                                <a
                                    className="inline-block text-white text-grey-dark no-underline hover:text-grey-dark hover:underline py-2 px-4"
                                    href="/about"
                                >
                                    About
                                </a>
                            </li>
                            <li className="mr-3 py-2 lg:py-0">
                                <a
                                    className="inline-block text-white text-grey-dark no-underline hover:text-grey-dark hover:underline py-2 px-4"
                                    href="/about#brishty-contact-form"
                                >
                                    Contact us
                                </a>
                            </li>
                            <li className="mr-3 py-2 lg:py-0">
                                <a
                                    className="inline-block text-white text-grey-dark no-underline hover:text-grey-dark hover:underline py-2 px-4"
                                    href="/icons"
                                >
                                    Icons
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {displayNavSearch && (
                <NavSearch
                    searchContentNode={searchContentNode}
                    displayNavSearch={displayNavSearch}
                    setDisplayNavSearch={setDisplayNavSearch}
                />
            )}
        </nav>
    );
};

export default Header;
