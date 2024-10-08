import React from 'react';

const Gallery: React.FC<GalleryProps> = (props) => {
    const { } = {
        ...GalleryDefaults,
        ...props
    };
    return (
        <div>Gallery</div>
    );
};

export default Gallery;

type Props = {
    // Add your props here
};

type GalleryProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const GalleryDefaults: Props = {
    // Default prop values
};

