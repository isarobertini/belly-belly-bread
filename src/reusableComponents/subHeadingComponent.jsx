import papper from "../assets/performance/papper.jpg"

export const SubHeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans font-medium text-2xl mx-6 font-lexend tracking-tighter text-center text-orange-bright";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h2 className={classes}>{children}</h2>
    );
};
