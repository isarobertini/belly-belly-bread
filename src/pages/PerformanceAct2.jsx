import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { SoundComponent } from "../reusableComponents/soundComponent";
import { RollingText } from "../common/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";

import SoundPlaceholder from "../assets/performance/placeholder_sound.wav"

export const PerformanceAct2 = () => {
    return (
        <>
            <div className="">
                <div className="bg-pink-bright">
                    {/* Rolling text */}
                    <RollingText text="Trigger warning: deals with mental illness" />
                    <NavigationMenu />
                </div>
                <div className="bg-performance-act-one overflow-hidden">
                    <RollingText scrollamount="3" text="Act like 2!" />
                </div>
                <div className="flex flex-col items-center bg-performance-act-one">
                    <div className="md:w-6/12 justify-center">
                        <HeadingComponent>Performance</HeadingComponent>

                        <div className="my-12">
                            <SubSubHeadingComponent className="text-orange-bright underline decoration-solid">Act 2</SubSubHeadingComponent>
                            <SubSubHeadingComponent className="text-orange-bright">Diva Poem</SubSubHeadingComponent>
                            <SubSubHeadingComponent className="text-orange-bright">Protagonist: Gertrude Stein</SubSubHeadingComponent>
                            <ParagraphComponent>Hedda Bauer reading "Lifting Belly" (1913-1927) by Gertrude Stein</ParagraphComponent>
                        </div>

                        <div className="flex flex-col items-center">
                            <SubHeadingComponent>Sound: Lifting Belly</SubHeadingComponent>
                            <SoundComponent src={SoundPlaceholder} />
                        </div>
                        <div className="my-12 flex flex-col items-center">
                            <SubHeadingComponent>The Diva Poem</SubHeadingComponent>
                            <SubHeadingComponent>By Hedda Bauer</SubHeadingComponent>

                            <ParagraphComponent>The diva sleeping<br />
                                The diva breathing<br />
                                The diva scattering<br />
                                The diva dripping<br />
                                The diva numbing<br />
                                The diva soothing<br />
                                The diva trembling<br />
                                The diva strong<br />
                                The diva thong<br />
                                My diva cooking<br />
                                <br />
                                The diva sensuous<br />
                                The diva rhythm<br />
                                The diva's cycles<br />
                                <br />
                                The diva funny<br />
                                The diva bunny<br />
                                <br />
                                The diva hands<br />
                                The diva mouth<br />
                                The diva head<br />
                                The diva chest<br />
                                <br />
                                The diva size<br />
                                The diva thighs<br />
                                <br />
                                The diva sick<br />
                                The diva kick<br />
                                <br />
                                The diva bread<br />
                                The diva belly<br />
                                The diva head<br />
                                <br />
                                The diva cow<br />
                                The diva now<br />
                                <br />
                                The diva back<br />
                                The diva rack<br />
                                The diva attack<br />
                                <br />
                                The diva ground<br />
                                The diva dips<br />
                                The diva flames<br />
                                The diva clouds<br />
                                <br />
                                The diva smack<br />
                                The diva track<br />
                                <br />
                                The diva crew<br />
                                The diva moo<br />
                                <br />
                                The more<br />
                                The soar<br />
                                Diva here take it all<br />
                                <br />
                                Diva me diva you, diva<br />
                                <br />
                                Diva destiny<br />
                                Diva exit<br />
                                Diva mort<br />
                                Diva is that your sort?<br />
                                The Diva is splendid
                            </ParagraphComponent>

                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}