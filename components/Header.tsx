import SearchLocation from "./SearchLocation";

const Title = () => {
    return (
        <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="leading-none text-2xl">
                <a className="no-underline text-white hover:underline" href="/">
                    Brishty
                </a>
            </h1>
        </div>
    );
}

const Header = () => {
    return (
        <header
            className="fixed left-0 right-0 bg-gray-800 border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
            <Title/>
            <SearchLocation/>
            {/*TODO : Commenting out Nav until I get round to introducing burger menu and adding About and Contact page, etc*/}
            {/*<NavV1/>*/}
        </header>
    );
};

export default Header

