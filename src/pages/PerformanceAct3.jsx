import { useEffect } from "react";

import { NavigationMenu } from "../common/NavigationMenu";
import { VideoComponent } from "../reusableComponents/videoComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { RollingText } from "../common/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { ButtonComponent } from "../reusableComponents/buttonComponent";

import ActHeading from "../assets/performance/ActHeading.png";
import threeHeading from "../assets/performance/threeHeading.png";
import oneHeading from "../assets/performance/oneHeading.png";
import twoHeading from "../assets/performance/twoHeading.png";
import Sketch from "../assets/performance/sketch.webp";

export const PerformanceAct3 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="how to find your inner diva" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    <div className="flex flex-col md:flex-row w-full justify-center items-center">
                        <ImageComponent className="w-52 md:w-96" src={ActHeading} disableModal />
                        <ImageComponent className="w-52 md:w-60" src={threeHeading} disableModal />
                    </div>

                    <div className="">
                        <div className="my-12">
                            <SubSubHeadingComponent className="text-orange-bright underline decoration-solid">Act 3</SubSubHeadingComponent>
                            <SubSubHeadingComponent className="text-orange-bright">3 rooms</SubSubHeadingComponent>
                            <SubSubHeadingComponent className="text-orange-bright">Protagonist: Maria Callas</SubSubHeadingComponent>
                            <ParagraphComponent>A sketch of the 3 rooms, made by Hedda Bauer.</ParagraphComponent>
                            <ImageComponent src={Sketch} />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                        <div className="border-2 border-black p-4 m-4 bg-pink-light">
                            <ImageComponent className="h-48" src={oneHeading} />
                            <ButtonComponent to="/performance/act1" label="Go to Act 1" />
                        </div>
                        <div className="border-2 border-black p-4 m-4 bg-orange-bright">
                            <ImageComponent className="h-48" src={twoHeading} />
                            <ButtonComponent to="/performance/act2" label="Go to Act 2" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}