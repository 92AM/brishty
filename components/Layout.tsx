import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from "./Header";

type Props = {
    children?: ReactNode
    title?: string
}

const exampleWeatherApiExample: string = "/api/weather?location=london";

const Layout = ({children, title = 'Brishty'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header/>
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                {' '}|{' '}
                <Link href={exampleWeatherApiExample}>
                    <a>Weather API Example</a>
                </Link>
            </nav>
        </header>
        {children}
        <footer className="bg-indigo-900 text-white text-2l text-center p-8">
            Brishty &#169; 2021
        </footer>
    </div>
)

export default Layout
