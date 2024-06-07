import { useLocation } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import { ButtonComponent } from "../reusableComponents/buttonComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";

import oneHeading from "../assets/performance/oneHeading.webp";
import twoHeading from "../assets/performance/twoHeading.webp";
import threeHeading from "../assets/performance/threeHeading.webp";
import Bauer from "../assets/performance/Bauer.webp"
import Stein from "../assets/performance/Stein.webp"
import Callas from "../assets/performance/Callas.webp"

export const Acts = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const showAct1 = currentPath !== "/performance/act1";
    const showAct2 = currentPath !== "/performance/act2";
    const showAct3 = currentPath !== "/performance/act3";

    return (
        <Fade>
            <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                {showAct1 && (
                    <div className="relative border-2 border-black p-4 m-4 bg-pink-light hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <ImageComponent className="h-48 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0" src={oneHeading} disableModal />
                            <ImageComponent className="h-52 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 absolute" src={Bauer} disableModal />
                        </div>
                        <ButtonComponent to="/performance/act1" label="Go to Act 1" />
                    </div>
                )}
                {showAct2 && (
                    <div className="border-2 border-black p-4 m-4 bg-yellow-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <ImageComponent className="h-48 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0" src={twoHeading} disableModal />
                            <ImageComponent className="h-52 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 absolute" src={Stein} disableModal />
                        </div>
                        <ButtonComponent to="/performance/act2" label="Go to Act 2" />
                    </div>
                )}
                {showAct3 && (
                    <div className="border-2 border-black p-4 m-4 bg-orange-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <ImageComponent className="w-28 h-48" src={threeHeading} disableModal />
                            <ImageComponent className="h-52 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 absolute" src={Callas} disableModal />
                        </div>
                        <ButtonComponent to="/performance/act3" label="Go to Act 3" />
                    </div>
                )}
            </div>
        </Fade>
    )
}