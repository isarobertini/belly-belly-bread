export const ParagraphComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans font-medium font-lexend tracking-tighter m-6 text-black text-blue-800";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <p className={classes}>{children}</p>
    );
};
