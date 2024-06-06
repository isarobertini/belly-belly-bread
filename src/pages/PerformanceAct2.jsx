import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { SoundComponent } from "../reusableComponents/soundComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ButtonComponent } from "../reusableComponents/buttonComponent";
import { Footer } from "../reusableComponents/footer";

import ActHeading from "../assets/performance/ActHeading.png";
import twoHeading from "../assets/performance/twoHeading.png";
import oneHeading from "../assets/performance/oneHeading.png";
import threeHeading from "../assets/performance/threeHeading.png";
import SoundLiftingBelly from "../assets/performance/SoundLiftingBelly.m4a";

export const PerformanceAct2 = () => {

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
                <RollingText scrollamount="3" text="Act like it or not" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center">
                            <ImageComponent className="w-52 md:w-96" src={ActHeading} disableModal />
                            <ImageComponent className="w-52 md:w-60" src={twoHeading} disableModal />
                        </div>
                    </Fade>

                    <div className="my-12">
                        <SubSubHeadingComponent className="text-orange-bright underline decoration-solid">Act 2</SubSubHeadingComponent>
                        <SubSubHeadingComponent className="text-orange-bright">Diva Poem</SubSubHeadingComponent>
                        <SubSubHeadingComponent className="text-orange-bright">Protagonist: Gertrude Stein</SubSubHeadingComponent>

                        <ParagraphComponent>Hedda Bauer reading "Lifting Belly" (1913-1927) by Gertrude Stein</ParagraphComponent>
                    </div>

                    <div className="flex flex-col items-center">
                        <SubHeadingComponent>Sound:</SubHeadingComponent>
                        <SoundComponent src={SoundLiftingBelly} />
                    </div>

                    <div className="my-12 flex flex-col items-center">
                        <SubHeadingComponent>The Diva Poem</SubHeadingComponent>
                        <SubHeadingComponent>By Hedda Bauer</SubHeadingComponent>

                        <ParagraphComponent>
                            The diva sleeping
                            The diva breathing
                            The diva scattering
                            The diva dripping
                            The diva numbing
                            The diva soothing
                            The diva trembling
                            The diva strong
                            The diva thong
                            My diva cooking

                            The diva sensuous
                            The diva rhythm
                            The diva's cycles

                            The diva funny
                            And the diva bunny

                            The diva hands
                            The diva mouth
                            The diva head
                            The diva chest

                            The diva size
                            The diva thighs

                            The diva sick
                            And the diva kicks

                            The diva bread
                            The diva belly
                            The diva head

                            The diva cow
                            The diva now

                            The diva back
                            The diva rack
                            The diva attack

                            The diva ground
                            The diva dips

                            The diva smack
                            The diva track

                            The diva crew
                            The diva moo
                        </ParagraphComponent>

                    </div>

                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                            <div className="border-2 border-black p-4 m-4 bg-pink-light hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                <ImageComponent className="h-48" src={oneHeading} />
                                <ButtonComponent to="/performance/act1" label="Go to Act 1" />
                            </div>
                            <div className="border-2 border-black p-4 m-4 bg-yellow-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                <ImageComponent className="w-28 h-48" src={threeHeading} />
                                <ButtonComponent to="/performance/act3" label="Go to Act 3" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <Footer />
        </>
    )
}
