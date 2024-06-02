import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { VideoComponent } from "../reusableComponents/videoComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { SoundComponent } from "../reusableComponents/soundComponent";
import { RollingText } from "../common/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import Sketch from "../assets/performance/sketch.webp"
import placeholderVideo from "../assets/performance/placeholder_video.mp4"
import Letter from "../assets/cookBook/letter.webp";
import SoundPlaceholder from "../assets/performance/placeholder_sound.wav"

export const PerformanceAct3 = () => {
    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="Act like 3!" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">
                    <HeadingComponent>Performance</HeadingComponent>

                    <div className="">
                        <div className="my-12">
                            <SubSubHeadingComponent className="text-orange-bright underline decoration-solid">Act 3</SubSubHeadingComponent>
                            <SubSubHeadingComponent className="text-orange-bright">3 rooms</SubSubHeadingComponent>
                            <SubSubHeadingComponent className="text-orange-bright">Protagonist: Maria Callas</SubSubHeadingComponent>
                            <ParagraphComponent>A sketch of the 3 rooms, made by Hedda Bauer.</ParagraphComponent>
                            <ImageComponent src={Sketch} />
                        </div>
                    </div >

                    {/* Rolling text */}
                    <RollingText text="How to find your inner diva" />

                    <div className="my-6 flex flex-col items-center bg-brown-dark">
                        <div className="md:w-6/12 justify-center">
                            <SubHeadingComponent>30s video</SubHeadingComponent>
                            <SubHeadingComponent>16mm currently developing in Belgium</SubHeadingComponent>
                            <VideoComponent src={placeholderVideo} />
                        </div >
                    </div >

                </div >
            </div >
        </>
    )
}