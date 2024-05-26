
export const HeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "text-5xl font-creepster-regular text-center break-word overflow-hidden";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h1 className={classes}>{children}</h1>
    );
};
