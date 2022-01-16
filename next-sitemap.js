/* eslint @typescript-eslint/no-var-requires: "off" */

const {
    SITE_URL,
    DYNAMIC_ADDITIONAL_SITEMAP_PATH,
    SITEMAP_XML_EXTENSION,
    STATIC_SITEMAP_FILE_NAME,
} = require('./utility/constants');

const additionalWeatherSitemaps = [...Array(21).keys()].map(
    (page) => `${SITE_URL}${DYNAMIC_ADDITIONAL_SITEMAP_PATH}${page + 1}${SITEMAP_XML_EXTENSION}`,
);

module.exports = {
    SITE_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [`${SITE_URL}/${STATIC_SITEMAP_FILE_NAME}`, ...additionalWeatherSitemaps],
    },
};
