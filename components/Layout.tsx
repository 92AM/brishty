import React, { Fragment, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';

type Props = {
  children?: ReactNode;
  title?: string;
  background?: string;
};

const Layout = ({ children, title, background }: Props) => (
  <Fragment>
    <body className={background ? background : 'bg-gray-100'}>
      <Seo title={title} />
      <noscript>
        You need to enable JavaScript to run this app, without it some feature
        may not work.
      </noscript>
      <Header />
      {children}
      <Footer />
    </body>
  </Fragment>
);

export default Layout;
