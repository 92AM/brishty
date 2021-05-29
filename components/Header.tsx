import React, {useEffect, useRef, useState} from "react"
import NavSearch from "./NavSearch";
import {getDocument} from "../services/BrowserService";

const Header = () => {

    // TODO : Commented this out for now but will need it in future when hamburger menu is used.
    // const [isBurgerMenuOpen, setBurgerMenuState] = useState(false);
    const [displayNavSearch, setDisplayNavSearch] = useState(false);
    const [clickedOnSearchForm, setClickedOnSearchFormState] = useState(false);
    const searchContentNode = useRef();

    useEffect(() => {
        getDocument().addEventListener("mousedown", checkIfSearchContentIsClicked);
        return () => {
            getDocument().removeEventListener("mousedown", checkIfSearchContentIsClicked);
        };
    }, []);

    const checkIfSearchContentIsClicked = (e: any) => {
        // @ts-ignore
        if (searchContentNode && searchContentNode.current && searchContentNode.current.contains(e.target)) {
            setClickedOnSearchFormState(true);
            return;
        }
        setClickedOnSearchFormState(false);
    };

    // TODO : Commented these out for now but will need it in future when hamburger menu is used.
    // const handleBurgerMenuOnClickEvent = () => {
    //     isBurgerMenuOpen
    //         ? setBurgerMenuState(false)
    //         : setBurgerMenuState(true);
    // };
    //
    // const handleBurgerMenuOnBlurEvent = () => {
    //     setBurgerMenuState(false);
    // }

    const handleSearchButtonOnClickEvent = () => {
        displayNavSearch
            ? setDisplayNavSearch(false)
            : setDisplayNavSearch(true);
    }

    const handleSearchButtonOnBlurEvent = (e: any) => {
        e.preventDefault();
        if (clickedOnSearchForm) {
            return;
        }
        setDisplayNavSearch(false);
    }

    // TODO : Commented this out until I decide to add links and additional pages.
    // let cxNavBarLinks = "w-full flex-grow lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto lg:block mt-2 lg:mt-0 z-20";
    // cxNavBarLinks = isBurgerMenuOpen ? cxNavBarLinks : cxNavBarLinks + " hidden";

    return (
        <nav id="header" className="fixed w-full">
            <div className="relative w-full z-10 fixed top-0 bg-gray-800 border-b border-grey-light">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                    <div className="pl-4 flex items-center">
                        {/*TODO : Commented out until I come up with a logo!*/}
                        {/*<svg className="h-5 pr-3 fill-current text-teal-400" xmlns="http://www.w3.org/2000/svg"*/}
                        {/*     viewBox="0 0 20 20">*/}
                        {/*    <path*/}
                        {/*        d="M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>*/}
                        {/*</svg>*/}
                        <a className="text-white text-base no-underline hover:no-underline font-extrabold text-xl"
                           href="/"> Brishty</a>
                        <button id="search-toggle"
                                className="search-icon cursor-pointer ml-4 pl-6 pr-6"
                                onClick={handleSearchButtonOnClickEvent}
                                onBlur={(e) => handleSearchButtonOnBlurEvent(e)}
                        >
                            <svg className="fill-current pointer-events-none text-white w-4 h-4 inline"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {/*TODO : Commented out until I add link, hamburger menu is not needed until links / other pages are introduced.*/}
                    {/*<div className="pr-4">*/}
                    {/*    <button id="nav-toggle"*/}
                    {/*            className="block lg:hidden flex items-center px-3 py-2 border rounded text-white*/}
                    {/*            border-grey-dark hover:text-gray-300 hover:border-purple appearance-none*/}
                    {/*            focus:outline-none"*/}
                    {/*            onClick={handleBurgerMenuOnClickEvent}*/}
                    {/*            onBlur={handleBurgerMenuOnBlurEvent}*/}
                    {/*    >*/}
                    {/*        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg"><title>Menu</title>*/}
                    {/*            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    {/*TODO : Commented out until I sort out these links and add additional pages such as contacts, about, etc.*/}
                    {/*<div*/}
                    {/*    className={cxNavBarLinks}*/}
                    {/*    id="nav-content">*/}

                    {/*    <ul className="list-reset lg:flex justify-end items-center">*/}
                    {/*        <li className="mr-3 py-2 lg:py-0">*/}
                    {/*            <a className="inline-block py-2 px-4 text-white font-bold no-underline"*/}
                    {/*               href="#">Active</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="mr-3 py-2 lg:py-0">*/}
                    {/*            <a className="inline-block text-white text-grey-dark no-underline hover:text-grey-dark hover:underline py-2 px-4"*/}
                    {/*               href="#">link</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="mr-3 py-2 lg:py-0">*/}
                    {/*            <a className="inline-block text-white no-underline hover:text-grey-dark hover:underline py-2 px-4"*/}
                    {/*               href="#">link</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}

                    {/*</div>*/}

                </div>
            </div>
            {displayNavSearch &&
            <NavSearch
                searchContentNode={searchContentNode}
                displayNavSearch={displayNavSearch}
                setDisplayNavSearch={setDisplayNavSearch}
            />}
        </nav>
    );
};

export default Header
