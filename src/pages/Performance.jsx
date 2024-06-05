import { Fade } from "react-awesome-reveal";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../common/RollingText";
import { ButtonComponent } from "../reusableComponents/buttonComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { useLocation } from 'react-router-dom';
import { Footer } from "../reusableComponents/footer";

import oneHeading from "../assets/performance/oneHeading.png";
import twoHeading from "../assets/performance/twoHeading.png";
import threeHeading from "../assets/performance/threeHeading.png";
import PerformanceHeading from "../assets/performance/performanceHeading.png";

export const Performance = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const showAct1 = currentPath !== "/performance/act1";
    const showAct2 = currentPath !== "/performance/act2";
    const showAct3 = currentPath !== "/performance/act3";

    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one">
                <RollingText scrollamount="3" text="prrrrrrr prrrrrrrr prrrrrrrrrrrrrrrrr" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">
                    <Fade>
                        <ImageComponent className="" src={PerformanceHeading} disableModal />
                    </Fade>
                    <div className="my-6">
                        <SubHeadingComponent>Performance: 16, 23, 30th of June, 14h</SubHeadingComponent>
                        <SubHeadingComponent>Kurzbaugergasse 9, 1020 Wien</SubHeadingComponent>
                        <SubHeadingComponent>Operette in 3 acts</SubHeadingComponent>
                    </div>

                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                            {showAct1 && (
                                <div className="border-2 border-black p-4 m-4 bg-pink-light hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                    <ImageComponent className="h-48" src={oneHeading} disableModal />
                                    <ButtonComponent to="/performance/act1" label="Go to Act 1" />
                                </div>

                            )}
                            {showAct2 && (
                                <div className="border-2 border-black p-4 m-4 bg-orange-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                    <ImageComponent className="h-48" src={twoHeading} disableModal />
                                    <ButtonComponent to="/performance/act2" label="Go to Act 2" />
                                </div>
                            )}
                            {showAct3 && (
                                <div className="border-2 border-black p-4 m-4 bg-yellow-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                    <ImageComponent className="w-28 h-48" src={threeHeading} disableModal />
                                    <ButtonComponent to="/performance/act3" label="Go to Act 3" />
                                </div>
                            )}
                        </div>
                    </Fade>
                </div>
            </div >
            <Footer />
        </>
    )
}
