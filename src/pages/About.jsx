import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../common/RollingText";

import AboutBellyBread from "../assets/about/about.webp"
import performanceInstructions from "../assets/performance/performance_instructions.webp"
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";

export const About = () => {
    return (
        <>
            <div className="bg-pink-light">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="h-auto flex flex-col items-center bg-brown-dark ">
                <div className="md:w-6/12 justify-center">
                    <HeadingComponent>About</HeadingComponent>


                    <ImageComponent src={AboutBellyBread} />
                    <SubHeadingComponent>Text by art historian reflecting on Hedda Bauers art work</SubHeadingComponent>

                    <SubHeadingComponent>Floorplan</SubHeadingComponent>
                    <SubHeadingComponent>Sketches?</SubHeadingComponent>
                    <ImageComponent src={performanceInstructions} />
                </div>
            </div>
        </>
    )
}