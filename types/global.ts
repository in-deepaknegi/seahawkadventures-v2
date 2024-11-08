import { ImageProps } from "next/image";


export type NavbarProps = {
    site: {
        name: string;
        logo: ImageProps;
    };
    links: {
        title: string;
        url: string;
    }[];
    dropdown: {
        title: string;
        url: string;
        thumbnail: ImageProps;
        sub: {
            title: string;
            url: string;
        }[];
    }[];
}

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
    }[];
    
    packages?: {
        title: string;
        description: string;
        rate: number;
        location: string;
        duration: string;
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