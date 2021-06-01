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
        <body className="bg-gray-100">
        <Seo title={title}/>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Header/>
        {children}
        <Footer/>
        </body>
    </Fragment>
)

export default Layout
