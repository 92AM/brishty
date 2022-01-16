/* eslint @typescript-eslint/no-var-requires: "off" */

const staticSitemapFileName = 'sitemap.xml';
const sitemapXmlExtension = '.xml';
const dynamicAdditionalSitemapPath = '/additional-sitemaps/weather-sitemap-page-';
const siteUrl = 'https://www.brishty.net';

const additionalWeatherSitemaps = [...Array(21).keys()].map(
    (page) => `${siteUrl}${dynamicAdditionalSitemapPath}${page + 1}${sitemapXmlExtension}`,
);

module.exports = {
    SITE_URL: siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [`${siteUrl}/${staticSitemapFileName}`, ...additionalWeatherSitemaps],
    },
};
