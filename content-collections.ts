import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

import remarkGfm from "remark-gfm";

const content = defineCollection({
    name: "content",
    directory: "content",
    include: "**/*.mdx",
    schema: (z) => ({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        date: z.string(),
        image: z.string(),
        logo: z.string(),
        
    }),
    transform: async (document, context) => {
        const body = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
        });

        return {
            ...document,
            slugAsParams: document._meta.path,
            body: {
                raw: document.content,
                code: body,
            },
        };
    },
});

export default defineConfig({
    collections: [ content],
});
