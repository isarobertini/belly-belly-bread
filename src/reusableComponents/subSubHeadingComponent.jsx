
export const SubSubHeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans mx-6 text-xl text-orange-bright font-bold text-center";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h2 className={classes}>{children}</h2>
    );
};
