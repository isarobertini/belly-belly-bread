import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { RollingText } from "../common/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";

import Letter from "../assets/cookBook/letter.webp";

export const PerformanceAct1 = () => {
    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="Act like 1!" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">
                    <HeadingComponent>Performance</HeadingComponent>

                    <div className="my-6">
                        <SubHeadingComponent>Performance: 16, 23, 30th of june, 14h</SubHeadingComponent>
                        <SubHeadingComponent>Kurzbaugergasse 9, 1020 Wien</SubHeadingComponent>
                    </div>

                    <div className="my-6">
                        <SubHeadingComponent>Operette in 3 acts</SubHeadingComponent>
                    </div>

                    <div className="my-12">
                        <SubSubHeadingComponent className="underline decoration-solid">Act 1</SubSubHeadingComponent>
                        <SubSubHeadingComponent className="text-orange-bright">The Letter</SubSubHeadingComponent>
                        <SubSubHeadingComponent className="text-orange-bright">Protagonist: Catharina Bauer</SubSubHeadingComponent>

                        <ParagraphComponent className="">
                            A letter sent from my grandmother Catharina Bauer to my mother. The letter was placed inside the cookbook.
                        </ParagraphComponent>
                        <ImageComponent src={Letter} />
                        <div>
                            <SubHeadingComponent>SWE</SubHeadingComponent>
                            <ParagraphComponent>
                                Marika, här får Du ett tecken till att ignorera.<br /> Den har, liksom den riktiga konsten, sitt eget starka uttryck. <br />
                                Alltså beror det på mottagaren att uttolka det, inget mer. <br />
                                Släng den i Din soptunna.
                            </ParagraphComponent>
                            <ParagraphComponent>
                                Mamma</ParagraphComponent>

                        </div>
                        <div>
                            <SubHeadingComponent>ENG</SubHeadingComponent>
                            <ParagraphComponent>
                                Marika, here you get a sign to ignore. <br />
                                It has, like real art, its own strong expression. <br />
                                Therefore it's up to the recipient to interpret it, nothing more. <br />
                                Throw it in your trash bin.<br /></ParagraphComponent>
                            <ParagraphComponent>  Mom
                            </ParagraphComponent>
                        </div>
                        <div>
                            <SubHeadingComponent>DE</SubHeadingComponent>
                            <ParagraphComponent>
                                Marika, hier bekommst du ein Zeichen, das du zu ignorieren kannst. <br />
                                Es hat, wie die richtigen Künste, seinen eigenen starken Ausdruck gefunden. <br />
                                Also hängt es von dem/der Empfänger*in ab, es zu interpretieren, nichts Weiteres.<br />
                                Wirf es in deine Mülltonne. <br />
                            </ParagraphComponent>
                            <ParagraphComponent> Mama</ParagraphComponent>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}