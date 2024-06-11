import { Fade } from "react-awesome-reveal";

export const SubHeadingComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans font-medium text-2xl mx-6 font-lexend tracking-tighter text-center text-orange-bright";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <Fade>
        <h2 className={classes}>{children}</h2>
        </Fade>
    );
};
