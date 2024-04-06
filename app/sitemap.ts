import { MetadataRoute } from "next";
import rafting from "@/data/rafting";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // add NEXT_PUBLIC_URL to env-var in production 
    const BASE_URL = process.env.NEXT_PUBLIC_URL
        ? `https://${process.env.NEXT_PUBLIC_URL}`
        : 'http://localhost:3000';

    const urls = [
        `${BASE_URL}/rafting`,
        `${BASE_URL}/about-us`,
        `${BASE_URL}/contact-us`,
        `${BASE_URL}/gallery`,
    ]

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const entries_r: MetadataRoute.Sitemap = rafting.map(({ slug }) => ({
        url: `${BASE_URL}/rafting/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...allUrls,
        ...entries_r,
    ]
}