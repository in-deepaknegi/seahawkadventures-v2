import React from 'react';
import { ComponentProps } from '@/types/global';

const Feature: React.FC<FeatureProps> = (props) => {
    const { } = {
        ...FeatureDefaults,
        ...props
    };
    return (
        <div>Feature</div>
    );
};

export default Feature;

type FeatureProps = React.ComponentPropsWithoutRef<"section"> & Partial<ComponentProps>;

const FeatureDefaults: ComponentProps = {
    heading: "Explore adventure with us",
};

