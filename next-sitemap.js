/* eslint @typescript-eslint/no-var-requires: "off" */

const staticSitemapFileName = 'sitemap.xml';
const sitemapXmlExtension = '.xml';
const dynamicAdditionalSitemapPath = '/additional-sitemaps/weather-sitemap-page-';
const siteUrl = 'https://www.brishty.net';
const maxPage = 21;

const additionalWeatherSitemaps = [...Array(maxPage).keys()].map(
    (page) => `${siteUrl}${dynamicAdditionalSitemapPath}${page + 1}${sitemapXmlExtension}`,
);

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [`${siteUrl}/${staticSitemapFileName}`, ...additionalWeatherSitemaps],
    },
};
