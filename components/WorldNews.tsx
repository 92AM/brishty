import React from 'react';
import { News } from '../interfaces';

type WorldNewProps = {
    items: News[];
};

const WorldNews = ({ items }: WorldNewProps) => {
    const worldNewsComponentList: any = [];

    items.forEach((news) => {
        const facetsComponentList: any = [];

        news.facets &&
            news.facets.length !== 0 &&
            news.facets.forEach((facet) => {
                facet &&
                    facetsComponentList.push(
                        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 shadow-sm">
                            {facet}
                        </span>,
                    );
            });

        worldNewsComponentList.push(
            <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                    className="h-80 w-full object-cover"
                    src={news.imageSource}
                    alt={news.imageCopyright}
                    loading="lazy"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{news.title}</div>
                    {news.newsDescription && (
                        <span className="text-gray-700 h-4 text-base">{news.newsDescription}</span>
                    )}
                    <p className="text-gray-700 pt-5 text-base font-semibold">
                        Published on : <span className="text-base font-bold">{news.publishedDate}</span>
                    </p>
                </div>
                <div className="px-6 pt-2 pb-2">
                    {news.section && (
                        <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 shadow-sm">
                            {news.section}
                        </span>
                    )}
                    {news.subsection && (
                        <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 shadow-sm">
                            {news.subsection}
                        </span>
                    )}
                </div>
                <div className="px-6 pt-2 pb-4">{facetsComponentList && facetsComponentList}</div>
            </div>,
        );
    });

    return (
        <>
            <div className="text-black pt-10 p-2 pb-3 text-3xl text-center">{'World News'}</div>
            <div className="pl-3 pr-3 pt-5 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
                {worldNewsComponentList && worldNewsComponentList}
            </div>
        </>
    );
};

export default WorldNews;
