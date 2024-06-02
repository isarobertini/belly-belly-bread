export const ParagraphComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans font-bold m-6 text-pink-bright";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <p className={classes}>{children}</p>
    );
};
