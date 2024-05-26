
export const ImageComponent = ({ src, alt, className, ...props }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "p-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <img src={src} alt={alt} className={classes} {...props} />
    );
};
