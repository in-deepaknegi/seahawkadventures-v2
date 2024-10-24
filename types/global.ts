import { ImageProps } from "next/image";

export type ComponentProps = {
    heading: string;
    sub_heading?: string;
    image?: ImageProps;

    tabs?: {
        title: string;
        description: string;
        thumbnail: string;
    }[];
}