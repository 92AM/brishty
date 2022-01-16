import {
    DYNAMIC_ADDITIONAL_SITEMAP_PATH,
    SITE_URL,
    SITEMAP_XML_EXTENSION,
    STATIC_SITEMAP_FILE_NAME,
} from './utility/constants';

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
