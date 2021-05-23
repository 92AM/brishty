import React, {Fragment, ReactNode} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title}: Props) => (
    <Fragment>
        <Seo title={title}/>
        <body className="bg-gray-50">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        </body>
        <Header/>
        {children}
        <Footer/>
    </Fragment>
)

export default Layout
