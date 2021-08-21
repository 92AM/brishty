import { News } from '../interfaces';
import { nyTimesNewsClient } from '../api/NyTimesNewsClient';

export const getWorldNews = async (): Promise<News[]> => {
    const nearbyLocationsAsJson = await nyTimesNewsClient();

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
                imageSource: news.multimedia[0].url,
                imageCaption: news.multimedia[0].caption,
                imageCopyright: news.multimedia[0].copyright,
                facets: [...news.geo_facet, ...news.org_facet, ...news.per_facet],
            };
            mappedNewsItems.push(tempNews);
        });

        return mappedNewsItems;
    };

    return mapNewsJsonToNews(nearbyLocationsAsJson);
};
