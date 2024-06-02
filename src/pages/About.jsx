import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../common/RollingText";

import AboutBellyBread from "../assets/about/about.webp"
import performanceInstructions from "../assets/performance/performance_instructions.webp"
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";

export const About = () => {
    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="it's not about you" />
            </div>

            <div className="h-auto flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">
                    <HeadingComponent>About</HeadingComponent>


                    <ImageComponent src={AboutBellyBread} />


                    <SubHeadingComponent>Text by Mark reflecting on Hedda Bauers art work</SubHeadingComponent>

                    <SubHeadingComponent>Floorplan</SubHeadingComponent>

                </div>
            </div>
        </>
    )
}