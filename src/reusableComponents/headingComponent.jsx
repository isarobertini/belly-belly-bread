import React from 'react';

export const HeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "text-3xl font-bold underline text-center";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h1 className={classes}>{children}</h1>
    );
};
