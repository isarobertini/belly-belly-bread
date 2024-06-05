import { Fade } from "react-awesome-reveal";

export const ParagraphComponent = ({ children, className }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "font-sans text-lg font-medium font-lexend tracking-tighter m-6 text-black text-pink-bright ";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <Fade>
            <p className={classes}>{children}</p>
        </Fade>
    );
};
