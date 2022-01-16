import { BRISHTY_SITEMAP_GENERATOR_ENDPOINT_PATH, BRISHTY_SITEMAP_GENERATOR_HOST } from '../utility/constants';
import { ISitemapField } from 'next-sitemap';
import { SiteMapLinks } from '../interfaces';

export const generateDynamicWeatherSitemapFields = async (page: number): Promise<ISitemapField[]> => {
    const response = await fetch(`${BRISHTY_SITEMAP_GENERATOR_HOST}${BRISHTY_SITEMAP_GENERATOR_ENDPOINT_PATH}/${page}`);
    const sitemapLinks: SiteMapLinks = await response.json();

    return sitemapLinks.links.map((eachLink) => ({
        loc: eachLink,
        lastmod: new Date().toISOString(),
    }));
};
