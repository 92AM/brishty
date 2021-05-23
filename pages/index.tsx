import Layout from '../components/Layout'
import React from "react";
import PageContentWrapper from "../components/PageContentWrapper";
import SearchBox from "../components/SearchBox";

const IndexPage = () => (
    <Layout title="Brishty - search for weather">
        <div className="bg-cover pt-32 h-full bg-raindrop">
            <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
                <div className="mx-auto container block bg-gray-800 max-w-5xl rounded-xl">
                    <span className="block pt-6 text-center text-gray-200 text-3xl font-extrabold">Find your weather today</span>
                    <span
                        className="block pt-3 text-center text-lg text-gray-400">Search for your favourite location!</span>
                    <SearchBox/>
                </div>
            </PageContentWrapper>
        </div>
        <PageContentWrapper classNameCustomAttributes={"py-10 px-2"}>
            <span className="block pt-3 text-center text-2xl text-gray-800">Below are few well known cities.</span>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <a className="rounded overflow-hidden shadow-lg" href="/weather/London">
                    <img className="w-full" src="/images/london.jpg" alt="London weather"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">London</div>
                        <p className="text-gray-800 text-base">
                            London, the capital of England and the United Kingdom, is a 21st-century city with
                            history stretching back to Roman times. At its centre stand the imposing Houses of
                            Parliament,
                            the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.
                            Across the Thames River, the London Eye observation wheel provides panoramic views of the
                            South Bank cultural complex, and the entire city.
                        </p>
                    </div>
                </a>
                <a className="rounded overflow-hidden shadow-lg" href="/weather/New%20York%20City">
                    <img className="w-full" src="images/newyork.jpg" alt="New York City weather"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">New York City</div>
                        <p className="text-gray-800 text-base">
                            It is the largest and most influential American metropolis, encompassing Manhattan and
                            Staten islands, the western sections of Long Island, and a small portion of the New York
                            state mainland to the north of Manhattan.
                        </p>
                    </div>
                </a>

                <a className="rounded overflow-hidden shadow-lg" href="/weather/Chicago">
                    <img className="w-full" src="images/chicago.jpg" alt="Chicago city weather"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Chicago</div>
                        <p className="text-gray-800 text-base">
                            The City of Chicago covers an area of 60,000 hectares and sits 176 meters (578 feet)
                            above sea level on the southwestern shore of Lake Michigan. At 190 km wide and 495 km long,
                            its the 5th largest body of fresh water in the world. The city is traversed by the Chicago
                            and Calumet rivers. Chicago's extensive parklands, including 3,000 hectares of city parks
                            attract an estimated 86 million visitors annually.
                        </p>
                    </div>
                </a>

                <a className="rounded overflow-hidden shadow-lg" href="/weather/Paris">
                    <img className="w-full" src="images/paris.jpg" alt="Paris weather"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Paris</div>
                        <p className="text-gray-800 text-base">
                            Paris, France's capital, is a major European city and a global center for art, fashion,
                            gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and
                            the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century,
                            Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques
                            along the Rue du Faubourg Saint-Honoré.
                        </p>
                    </div>
                </a>

                <a className="rounded overflow-hidden shadow-lg" href="/weather/Rome">
                    <img className="w-full" src="images/rome.jpg" alt="Rome weather"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Rome</div>
                        <p className="text-gray-800 text-base">
                            Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio
                            region.
                            The city has been a major human settlement for almost three millennia. With 2,860,009
                            residents
                            in 1,285 km², it is also the country's most populated comune.
                        </p>
                    </div>
                </a>

                <a className="rounded overflow-hidden shadow-lg" href="/weather/Rio%20de%20Janeiro">
                    <img className="w-full" src="images/rio.jpg" alt="Rio de Janerio weather"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Rio de Janeiro</div>
                        <p className="text-gray-800 text-base">
                            Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema
                            beaches,
                            38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite
                            peak
                            with cable cars to its summit. The city is also known for its sprawling favelas (shanty
                            towns).
                            Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba
                            dancers,
                            is considered the world’s largest.
                        </p>
                    </div>
                </a>
            </div>
        </PageContentWrapper>
    </Layout>
)

export default IndexPage
