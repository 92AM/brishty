import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'

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
        <footer>
            <hr/>
            <span>Brishty &#169; 2021</span>
        </footer>
    </div>
)

export default Layout
