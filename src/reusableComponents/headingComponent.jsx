
export const HeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "text-5xl font-lexend tracking-tighter text-pink-bright text-center break-word py-12 break-words";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h1 className={classes}>{children}</h1>
    );
};
