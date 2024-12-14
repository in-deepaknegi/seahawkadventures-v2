import React from 'react'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

const MainPage = ({ params }: { params: { slug: string } }) => {


    const id = params.slug;

    const filePath = path.join(process.cwd(), "content", `${id}.mdx`);

    const srco = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(srco);
    const value = data;
    const src = content;


    return (
        <article>
            {value.title}
            {value.description}
            <MDXRemote source={src} />
        </article>
    )
}

export default MainPage