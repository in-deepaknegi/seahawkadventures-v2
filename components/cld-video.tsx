"use client";

import React from "react";
import { CldVideoPlayer } from "next-cloudinary";

const CldVideoComponent = ({
    src,
    width,
    height,
    className,
    autoPlay,
    muted,
    loop,
}: {
    src: string;
    width?: number;
    height?: number;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
}) => {
    return (
        <CldVideoPlayer
            width={width}
            height={height}
            src={src}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
        />
    );
};

export default CldVideoComponent;
