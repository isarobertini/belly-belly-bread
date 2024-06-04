
export const SubSubHeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans font-medium mx-6 text-xl font-lexend tracking-tighter text-center text-blue-800";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h2 className={classes}>{children}</h2>
    );
};
