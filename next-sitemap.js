const {
    SITE_URL,
    STATIC_SITEMAP_FILE_NAME,
    SITEMAP_XML_EXTENSION,
    DYNAMIC_ADDITIONAL_SITEMAP_PATH,
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
