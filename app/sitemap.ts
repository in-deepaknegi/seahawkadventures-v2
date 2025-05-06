import allContents from "@/.content-collections/generated/allContents";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const BASE_URL = process.env.NEXT_PUBLIC_URL
        ? `${process.env.NEXT_PUBLIC_URL}`
        : "http://localhost:3000";

    const allRoutes = [
        `/about-us`,
        `/contact`,
        `/gallery`,
        `/feedback`,
        `/adventure-in-rishikesh/`,
        `/adventure-in-rishikesh/camping`,
        `/adventure-in-rishikesh/expedition-adventures`,
        `/adventure-in-rishikesh/kayak-school`,
        `/adventure-in-rishikesh/river-rafting`,

        // `/terms-and-conditions`,
        // `/privacy-policy`,
        // `/refund-policy`,
        // `/cancellation-policy`,
        // `/copyright`,
    ];

    const routes: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
    }));

    const contents: MetadataRoute.Sitemap = allContents.map(
        ({ slugAsParams }) => ({
            url: `${BASE_URL}/tours/${slugAsParams}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        }),
    );

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...routes,
        ...contents,
    ];
}
