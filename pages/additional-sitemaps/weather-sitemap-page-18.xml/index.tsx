import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import { generateDynamicWeatherSitemapFields } from '../../../services/DynamicSitemapGenerator';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const pageNumberToFetch = 17;
    return getServerSideSitemap(ctx, [...(await generateDynamicWeatherSitemapFields(pageNumberToFetch))]);
};

export default function Site() {}
