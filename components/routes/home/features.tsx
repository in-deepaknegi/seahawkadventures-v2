import React from 'react';
import { ComponentProps } from '@/types/global';

const Features: React.FC<FeaturesProps> = (props) => {
    const { } = {
        ...FeaturesDefaults,
        ...props
    };
    return (
        <div>Features</div>
    );
};

export default Features;

type FeaturesProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const FeaturesDefaults: ComponentProps = {

};

