import React, { Fragment } from 'react';

type Props = {
  title?: string;
};

const Seo = ({ title = 'Brishty' }: Props) => {
  return (
    <Fragment>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Brishty - find weather about any city."
      />
      <meta name="author" content="Arka Mitra" />
      <meta name="keywords" content="weather, brishty, weather website" />
    </Fragment>
  );
};

export default Seo;
