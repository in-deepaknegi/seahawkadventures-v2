import { ImageProps } from "next/image";

export type PackageProps = {
    title: string;
    description: string;
    collection: {
        title: string;
        price:number;
        image: ImageProps;
        description: string;
        features: {
            distance: string;
            duration: string;
            startingPoint: string;
            endingPoint: string;
            rapids: {
                total: string;
                grades: string;
            }
            difficulty: string;
        }
    }[]
};