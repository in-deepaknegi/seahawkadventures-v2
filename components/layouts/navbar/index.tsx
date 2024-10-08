import React from 'react';

const Navbar: React.FC<NavbarProps> = (props) => {
    const { } = {
        ...NavbarDefaults,
        ...props
    };
    return (
        <div>Navbar</div>
    );
};

export default Navbar;

type Props = {
    // Add your props here
};

type NavbarProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const NavbarDefaults: Props = {
    // Default prop values
};

