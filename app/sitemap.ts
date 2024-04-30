import { MetadataRoute } from "next";
import rafting from "@/data/rafting";
import kayak from "@/data/kayak";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // add NEXT_PUBLIC_URL to env-var in production 
    const BASE_URL = process.env.NEXT_PUBLIC_URL
        ? `${process.env.NEXT_PUBLIC_URL}`
        : 'http://localhost:3000';

    const urls = [
        `${BASE_URL}/rafting`,
        `${BASE_URL}/kayak`,
        `${BASE_URL}/about`,
        `${BASE_URL}/contacts`,
        `${BASE_URL}/gallery`,
    ]

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const rUrls: MetadataRoute.Sitemap = rafting.map(({ slug }) => ({
        url: `${BASE_URL}/rafting/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const kUrls: MetadataRoute.Sitemap = kayak.map(({ slug }) => ({
        url: `${BASE_URL}/kayak/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...allUrls,
        ...rUrls,
        ...kUrls,
    ]
}