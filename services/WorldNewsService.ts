import { News } from '../interfaces';
import { nyTimesNewsClient } from '../api/NyTimesNewsClient';

const isMultimediaAvailable = (news: any): boolean => {
    return news.multimedia !== null && news.multimedia !== undefined;
};

const toNews = (result: any): News => {
    return {
        section: result.section,
        subsection: result.subsection,
        title: result.title,
        newsDescription: result.abstract,
        byLine: result.byline,
        publishedDate: new Date(result.published_date).toDateString(),
        imageSource: isMultimediaAvailable(result) ? result.multimedia[0]?.url : '/images/placeholder-large.jpg',
        imageCaption: isMultimediaAvailable(result) ? result.multimedia[0]?.caption : 'image caption unavailable',
        imageCopyright: isMultimediaAvailable(result)
            ? result.multimedia[0]?.copyright
            : 'image copyright information unavailable',
        facets: [...result.geo_facet, ...result.org_facet, ...result.per_facet],
    } as News;
};

const mapNewsJsonToNews = (nearbyLocationsAsJson: any) => {
    return nearbyLocationsAsJson.results.map((result: any) => toNews(result));
};

export const getWorldNews = async (): Promise<News[]> => {
    const nearbyLocationsAsJson = await nyTimesNewsClient();
    return mapNewsJsonToNews(nearbyLocationsAsJson);
};
