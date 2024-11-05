import { ImageProps } from "next/image";

export type ComponentProps = {
    heading?: string;
    description?: string;
    sub_heading?: string;
    image?: ImageProps;

    services?: {
        title: string;
        description: string;
        thumbnail: ImageProps;
        link: string;
        packages?: {
            title: string;
            description: string;
            image: ImageProps;
            price: number;
            link: string;
        }[],
    }[];
}