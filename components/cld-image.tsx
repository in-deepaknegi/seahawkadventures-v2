"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

const CldImageComponent = ({
    src,
    width,
    height,
    alt,
    fill,
    priority,
    className,
}: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
    className?: string;
}) => {
    return (
        <CldImage
            src={src}
            width={width}
            height={height}
            alt={alt}
            fill={fill}
            className={className}
            priority={priority}
        />
    );
};

export default CldImageComponent;
