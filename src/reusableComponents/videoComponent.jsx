export const VideoComponent = ({ src, controls = true, autoPlay = false, className, ...props }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "p-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <div className="relative group">
            <video
                src={src}
                controls={controls} // Enable controls
                autoPlay={autoPlay} // Set autoplay based on prop
                className={classes}
                {...props}
            />
        </div>
    );
};
