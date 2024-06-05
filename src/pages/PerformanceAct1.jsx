import { useEffect } from "react";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { RollingText } from "../common/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { ButtonComponent } from "../reusableComponents/buttonComponent";
import { useLocation } from 'react-router-dom';
import { Footer } from "../reusableComponents/footer";

import ActHeading from "../assets/performance/ActHeading.png";
import oneHeading from "../assets/performance/oneHeading.png";
import twoHeading from "../assets/performance/twoHeading.png";
import threeHeading from "../assets/performance/threeHeading.png";
import Letter from "../assets/cookBook/letter.webp";

export const PerformanceAct1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();

    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="Act like it" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">
                    <div className="flex flex-col md:flex-row w-full justify-center items-center">
                        <ImageComponent className="w-52 md:w-96" src={ActHeading} disableModal />
                        <ImageComponent className="w-52 md:w-60" src={oneHeading} disableModal />
                    </div>


                    <div className="my-12">
                        <SubSubHeadingComponent className="underline decoration-solid ">Act 1</SubSubHeadingComponent>
                        <SubSubHeadingComponent className="">The Letter</SubSubHeadingComponent>
                        <SubSubHeadingComponent className="">Protagonist: Catharina Bauer</SubSubHeadingComponent>

                        <ParagraphComponent className="">
                            A letter from my grandmother Catharina Bauer to my mother. The letter was placed inside the cookbook.
                        </ParagraphComponent>
                        <ImageComponent src={Letter} />

                        <div>
                            <SubHeadingComponent>SWE</SubHeadingComponent>
                            <ParagraphComponent className="indent-8">
                                Marika, </ParagraphComponent>
                            <ParagraphComponent className="indent-11">
                                här får Du ett tecken till att ignorera.<br />
                                Den har, liksom den riktiga konsten, sitt eget starka uttryck. <br />
                                Alltså beror det på mottagaren att uttolka det, inget mer. <br />
                                Släng den i Din soptunna.
                            </ParagraphComponent>
                            <ParagraphComponent className="indent-60">Mamma</ParagraphComponent>
                        </div>

                        <div>
                            <SubHeadingComponent>ENG</SubHeadingComponent>

                            <ParagraphComponent className="indent-8">
                                Marika,</ParagraphComponent>
                            <ParagraphComponent className="indent-11">here you get a sign to ignore. <br />
                                It has, like real art, its own strong expression. <br />
                                Therefore it's up to the recipient to interpret it, nothing more. <br />
                                Throw it in your garbish bin.
                            </ParagraphComponent>
                            <ParagraphComponent className="indent-60">Mom</ParagraphComponent>
                        </div>

                        <div>
                            <SubHeadingComponent>DE</SubHeadingComponent>
                            <ParagraphComponent className="indent-8">
                                Marika, </ParagraphComponent><ParagraphComponent className="indent-11">hier bekommst du ein Zeichen, das du ignorieren kannst. <br />
                                Es hat, wie die richtigen Künste, seinen eigenen starken Ausdruck gefunden. <br />
                                Also hängt es von dem/der Empfänger*in ab, es zu interpretieren, nichts Weiteres.<br />
                                Wirf es in deine Mülltonne.
                            </ParagraphComponent>
                            <ParagraphComponent className="indent-60">Mama</ParagraphComponent>
                        </div>

                        <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                            <div className="border-2 border-black p-4 m-4 bg-orange-bright">
                                <ImageComponent className="h-48" src={twoHeading} />
                                <ButtonComponent to="/performance/act2" label="Go to Act 2" />
                            </div>
                            <div className="border-2 border-black p-4 m-4 bg-yellow-bright">
                                <ImageComponent className="w-28 h-48" src={threeHeading} />
                                <ButtonComponent to="/performance/act3" label="Go to Act 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
