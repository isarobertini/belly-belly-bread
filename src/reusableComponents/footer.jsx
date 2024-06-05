import { Fade } from "react-reveal";

export const Footer = () => {
    return (
        <Fade>
            <footer className="text-center py-4 bg-gray-200">
                <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Hedda Bauer. All Rights Reserved.</p>
            </footer>
        </Fade>
    );
};