const siteUrl = 'https://www.brishty.net';

const additionalWeatherSitemaps = [...Array(21).keys()].map(
    (page) => `${siteUrl}/additional-sitemaps/server-sitemap-page-${page}.xml`,
);

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [`${siteUrl}/sitemap.xml`, ...additionalWeatherSitemaps],
    },
};
