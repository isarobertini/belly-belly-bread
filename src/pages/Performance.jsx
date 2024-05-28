import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { VideoComponent } from "../reusableComponents/videoComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { NumberCircleComponent } from "../reusableComponents/numberCircleComponent";

import performanceInstructions from "../assets/performance/performance_instructions.webp"
import Sketch from "../assets/performance/sketch.webp"
import placeholderVideo from "../assets/performance/placeholder_video.mp4"

export const Performance = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>

            <div className="flex flex-col items-center bg-brown-dark">
                <div className="md:w-6/12 justify-center">
                    <HeadingComponent>Performance</HeadingComponent>


                    <NumberCircleComponent number={2} />

                    <SubHeadingComponent>Exercises</SubHeadingComponent>
                    <SubHeadingComponent>(Maria Callas)</SubHeadingComponent>

                    <ImageComponent src={performanceInstructions} />
                    <ImageComponent src={Sketch} />

                    <SubHeadingComponent>30s video</SubHeadingComponent>
                    <SubHeadingComponent>16mm currently developing in Belgium</SubHeadingComponent>
                    <VideoComponent src={placeholderVideo} />
                </div ></div >
        </>
    )
}