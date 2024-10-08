import { MetadataRoute } from "next";

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

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}