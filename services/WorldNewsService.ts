import { News } from '../interfaces';
import { nyTimesNewsClient } from '../api/NyTimesNewsClient';

const isMultimediaAvailable = (news: any): boolean => {
    return news.multimedia !== null && news.multimedia !== undefined;
};

const mapNewsJsonToNews = (nearbyLocationsAsJson: any) => {
    const newsResults = nearbyLocationsAsJson.results;
    const mappedNewsItems: News[] = [];

    newsResults.forEach((news: any) => {
        const tempNews: News = {
            section: news.section,
            subsection: news.subsection,
            title: news.title,
            newsDescription: news.abstract,
            byLine: news.byline,
            publishedDate: new Date(news.published_date).toDateString(),
            imageSource: news.multimedia[0]?.url,
            // imageSource: isMultimediaAvailable(news) ? news.multimedia[0]?.url : '/images/placeholder-large.jpg',
            imageCaption: isMultimediaAvailable(news) ? news.multimedia[0]?.caption : 'image caption unavailable',
            imageCopyright: isMultimediaAvailable(news)
                ? news.multimedia[0]?.copyright
                : 'image copyright information unavailable',
            facets: [...news.geo_facet, ...news.org_facet, ...news.per_facet],
        };
        mappedNewsItems.push(tempNews);
    });

    return mappedNewsItems;
};

export const getWorldNews = async (): Promise<News[]> => {
    const nearbyLocationsAsJson = await nyTimesNewsClient();
    return mapNewsJsonToNews(nearbyLocationsAsJson);
};
