import { Fade } from "react-awesome-reveal";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { Footer } from "../reusableComponents/footer";
import { crew } from "../data/CollaborationData";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Acts } from "../common/Acts";

import PerformanceHeading from "../assets/performance/performanceHeading.webp";

export const Performance = () => {

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

                    {/* Heading */}
                    <Fade>
                        <ImageComponent className="" src={PerformanceHeading} disableModal />
                    </Fade>

                    {/* SubHeading */}
                    <div className="my-6">
                        <SubHeadingComponent>Performance: 16, 23, 30th of June, 14h</SubHeadingComponent>
                        <SubHeadingComponent>Kurzbaugergasse 9, 1020 Wien</SubHeadingComponent>
                        <SubHeadingComponent>Operette in 3 acts</SubHeadingComponent>
                    </div>

                    <Acts />
                    {/*collabs */}
                    <SubHeadingComponent>CREW</SubHeadingComponent>
                    <div className="text-center">
                        {crew.map((crew, index) => (
                            <div key={index} className="w-full md:w-auto">
                                <ParagraphComponent>{crew.name}</ParagraphComponent>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
