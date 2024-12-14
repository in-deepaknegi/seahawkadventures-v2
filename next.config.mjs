import nextMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

export default withContentCollections(withMDX(nextConfig));