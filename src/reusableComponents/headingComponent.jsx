
export const HeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "text-5xl font-lexend tracking-tighter text-blue-700 text-center break-word py-12 break-words [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h1 className={classes}>{children}</h1>
    );
};
