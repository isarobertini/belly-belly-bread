export const ParagraphComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "m-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <p className={classes}>{children}</p>
    );
};
