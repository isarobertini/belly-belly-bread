import papper from "../assets/performance/papper.jpg"

export const SubHeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans text-3xl mx-6 font-lexend tracking-tighter font-bold text-center text-blue-800";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <h2 className={classes}>{children}</h2>
    );
};
