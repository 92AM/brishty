/* eslint @typescript-eslint/no-var-requires: "off" */

const siteUrl = 'https://www.brishty.net';
const staticSitemapFileName = 'sitemap.xml';

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [`${siteUrl}/${staticSitemapFileName}`],
    },
};
