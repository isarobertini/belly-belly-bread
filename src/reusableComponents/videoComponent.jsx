
export const VideoComponent = ({ src, controls = true, autoPlay = false, className, ...props }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "p-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <video src={src} controls={controls} autoPlay={autoPlay} className={classes} {...props} />
    );
};
