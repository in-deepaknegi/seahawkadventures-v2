import { ImageProps } from "next/image";

export type PackageProps = {
    title: string;
    description: string;
    collection: {
        title: string;
        price: number;
        image: ImageProps;
        description: string;
        features: {
            distance: string;
            // featured_image: string;
            duration: string;
            startingPoint: string;
            endingPoint: string;
            rapids: {
                total: string;
                grades: string;
            };
            difficulty: string;
        };
    }[];
};

export interface FeedbackProps {
    name: string;
    review_date: string;
    review: string;
}
