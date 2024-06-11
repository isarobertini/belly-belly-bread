import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export const ButtonComponent = ({ to, label, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <Fade>
            <Link
                to={to}
                onClick={handleClick}
                className="text-center inline-block px-6 m-2 py-2.5 bg-pink-bright text-yellow-bright font-lexend tracking-tighter text-md leading-tight uppercase shadow-md hover:bg-orange-bright hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
                {label}
            </Link>
        </Fade>
    );
};
