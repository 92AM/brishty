// @ts-ignore
const NavV1 = () => {
    const exampleWeatherApiExample: string = "/api/weather?location=london";

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

export default NavV1