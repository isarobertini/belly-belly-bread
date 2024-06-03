import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../common/RollingText";
import { ButtonComponent } from "../reusableComponents/buttonComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { useLocation } from 'react-router-dom';

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
                <RollingText scrollamount="3" text="perform! perform!" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    <ImageComponent src={PerformanceHeading} />

                    <div className="my-6">
                        <SubHeadingComponent>Performance: 16, 23, 30th of June, 14h</SubHeadingComponent>
                        <SubHeadingComponent>Kurzbaugergasse 9, 1020 Wien</SubHeadingComponent>
                    </div>

                    <div className="my-6">
                        <SubHeadingComponent>Operette in 3 acts</SubHeadingComponent>
                    </div>

                    <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                        {showAct1 && (
                            <div className="border-2 border-black p-4 m-4 bg-pink-light">
                                <ImageComponent className="h-48" src={oneHeading} />
                                <ButtonComponent to="/performance/act1" label="Go to Act 1" />
                            </div>
                        )}
                        {showAct2 && (
                            <div className="border-2 border-black p-4 m-4 bg-orange-bright">
                                <ImageComponent className="h-48" src={twoHeading} />
                                <ButtonComponent to="/performance/act2" label="Go to Act 2" />
                            </div>
                        )}
                        {showAct3 && (
                            <div className="border-2 border-black p-4 m-4 bg-yellow-bright">
                                <ImageComponent className="w-28 h-48" src={threeHeading} />
                                <ButtonComponent to="/performance/act3" label="Go to Act 3" />
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </>
    )
}
