import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { SoundComponent } from "../reusableComponents/soundComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { Footer } from "../reusableComponents/footer";
import { Acts } from "../common/Acts";

import Stein from "../assets/performance/Stein.webp"
import ActHeading from "../assets/performance/ActHeading.webp";
import twoHeading from "../assets/performance/twoHeading.webp";
import SoundLiftingBelly from "../assets/performance/SoundLiftingBelly.m4a";

export const PerformanceAct2 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Performance Act 2 - Belly Belly Bread</title>
                <meta name="description" content="Experience Act 2 of Belly Belly Bread's performance featuring 'Diva Poem' by Hedda Bauer, inspired by Gertrude Stein's 'Lifting Belly'. Trigger warning: deals with mental illness." />
            </Helmet>

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

                        <div className="bg-performance-act-one flex items-center justify-center">
                            <div className="w-52 border-2 border-black p-0 m-4 bg-orange-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                <ImageComponent src={Stein} />
                            </div>
                        </div>
                        <SubSubHeadingComponent className="text-orange-bright">Protagonist: Gertrude Stein</SubSubHeadingComponent>

                        <ParagraphComponent>Hedda Bauer reading "Lifting Belly" (1915-1917) by Gertrude Stein</ParagraphComponent>
                    </div>

                    <div className="flex flex-col items-center">
                        <SubHeadingComponent>Sound:</SubHeadingComponent>
                        <SoundComponent src={SoundLiftingBelly} />
                    </div>

                    <div className="my-12 flex flex-col items-center">
                        <SubHeadingComponent>The Diva Poem</SubHeadingComponent>
                        <SubHeadingComponent>By Hedda Bauer</SubHeadingComponent>

                        <ParagraphComponent>
                            The Diva sleeping The Diva breathing The Diva
                            scattering, The Diva dripping The Diva numbing The Diva soothing, The Diva trembling The Diva strong The Diva thong, The Diva sensuous The Diva rhythm The Diva‘s cycles, The Diva funny And the Diva bunny, The Diva hands The Diva mouth The Diva head, The Diva chest The Diva size The Diva thighs, The Diva six And the Diva kicks, The Diva bread The Diva belly The Diva head, The Diva cow The Diva now, The diva rack The Diva attack, The Diva ground The Diva dips The Diva smack The Diva track, The Diva crew and The Diva moo
                        </ParagraphComponent>
                    </div>

                    <Acts />
                </div>
            </div>
            <Footer />
        </>
    )
}
