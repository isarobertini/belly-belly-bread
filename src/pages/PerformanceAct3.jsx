import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import { NavigationMenu } from "../common/NavigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { ButtonComponent } from "../reusableComponents/buttonComponent";
import { Footer } from "../reusableComponents/footer";
import { Acts } from "../common/Acts";

import ActHeading from "../assets/performance/ActHeading.webp";
import threeHeading from "../assets/performance/threeHeading.webp";
import oneHeading from "../assets/performance/oneHeading.webp";
import twoHeading from "../assets/performance/twoHeading.webp";
import Sketch from "../assets/performance/sketch.webp";
import Callas from "../assets/performance/Callas.webp"

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

                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center">
                            <ImageComponent className="w-52 md:w-96" src={ActHeading} disableModal />
                            <ImageComponent className="w-52 md:w-60" src={threeHeading} disableModal />
                        </div>
                    </Fade>

                    <div className="">
                        <div className="my-12">
                            <SubSubHeadingComponent className="text-orange-bright underline decoration-solid">Act 3</SubSubHeadingComponent>
                            <SubSubHeadingComponent className="text-orange-bright">3 rooms</SubSubHeadingComponent>
                            <div className="bg-performance-act-one flex items-center justify-center">
                                <div className="w-52 border-2 border-black p-0 m-4 bg-orange-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                    <ImageComponent src={Callas} />
                                </div>
                            </div>
                            <SubSubHeadingComponent className="text-orange-bright">Protagonist: Maria Callas</SubSubHeadingComponent>
                            <ParagraphComponent>A sketch of the 3 rooms, made by Hedda Bauer.</ParagraphComponent>

                            <Fade>
                                <ImageComponent src={Sketch} />
                            </Fade>
                        </div>
                    </div>


                    <Acts />
                </div>
            </div>
            <Footer />
        </>
    )
}
