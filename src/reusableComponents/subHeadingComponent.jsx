
export const SubHeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-oxygen-mono text-xl text-pink-light font-bold text-center";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h2 className={classes}>{children}</h2>
    );
};
