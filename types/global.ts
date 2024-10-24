import { ImageProps } from "next/image";

export type ComponentProps = {
    heading: string;
    sub_heading?: string;
    image?: ImageProps;

    services?: {
        title: string;
        description: string;
        thumbnail: string;
        packages: {
            title: string;
            description: string;
            image: ImageProps;
            price: number;
            link: string;
        }[],
    }[];
}