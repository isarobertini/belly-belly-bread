
export const VideoComponent = ({ src, controls = true, autoPlay = false, className, poster, ...props }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "p-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <div className="relative group">
            <video
                src={src}
                controls={false} // Disable default controls
                autoPlay={false} // Disable autoplay
                className={classes}
                poster={poster}
                {...props}
            />
            <div
                className="absolute inset-0 flex items-center justify-center bg-transparent cursor-pointer"
            >
                {/* Overlay Content */}
                <div className="hover:bg-orange-bright p-2 transition duration-200 ease-in-out">
                    <img className="opacity-80" width="100" height="100" src="https://img.icons8.com/ios-filled/50/play--v1.png" alt="play--v1" />
                </div>
            </div>

        </div>
    );
};
