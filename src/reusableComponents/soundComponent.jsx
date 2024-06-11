import { Fade } from "react-awesome-reveal";

export const SoundComponent = ({ src, controls = true, autoPlay = false, className, ...props }) => {
    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "m-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (
        <Fade>
        <audio src={src} controls={controls} autoPlay={autoPlay} className={classes} {...props} />
        </Fade>
    );
};
