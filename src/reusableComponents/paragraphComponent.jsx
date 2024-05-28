export const ParagraphComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-oxygen-mono m-6 text-pink-light";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <p className={classes}>{children}</p>
    );
};
