import React from 'react';

const Footer: React.FC<FooterProps> = (props) => {
    const { } = {
        ...FooterDefaults,
        ...props
    };
    return (
        <div>Footer</div>
    );
};

export default Footer;

type Props = {
    // Add your props here
};

type FooterProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const FooterDefaults: Props = {
    // Default prop values
};

