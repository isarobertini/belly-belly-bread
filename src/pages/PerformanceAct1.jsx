import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { useLocation } from 'react-router-dom';
import { Footer } from "../reusableComponents/footer";
import { Acts } from "../common/Acts";

import ActHeading from "../assets/performance/ActHeading.webp";
import oneHeading from "../assets/performance/oneHeading.webp";
import Letter from "../assets/cookBook/letter.webp";
import Bauer from "../assets/performance/Bauer.webp"

export const PerformanceAct1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();

    return (
        <>

            <Helmet>
                <title>Performance Act 1 - Belly Belly Bread</title>
                <meta name="description" content="Experience Act 1 of Belly Belly Bread's performance featuring 'The Letter' by Catharina Bauer. Trigger warning: deals with mental illness." />
            </Helmet>
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

                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center">
                            <ImageComponent className="w-52 md:w-96" src={ActHeading} disableModal />
                            <ImageComponent className="w-52 md:w-60" src={oneHeading} disableModal />
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="mt-12 md:w-6/12 justify-center">
                    <SubSubHeadingComponent className="underline decoration-solid ">Act 1</SubSubHeadingComponent>

                    <SubSubHeadingComponent className="">The Letter</SubSubHeadingComponent>
                    <div className="bg-performance-act-one flex items-center justify-center">
                        <div className="w-52 border-2 border-black p-0 m-4 bg-orange-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                            <ImageComponent src={Bauer} />
                        </div>
                    </div>
                    <SubSubHeadingComponent className="">Protagonist: Catharina Bauer</SubSubHeadingComponent>
                </div>
            </div>


            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="my-12 md:w-6/12 justify-center ">
                    <ParagraphComponent className="">
                        A letter from my grandmother Catharina Bauer to my mother. The letter was placed inside the cookbook  "Prinsessornas Nya Kokbok" by Jenny Åkerström ( Published 1948 ).
                    </ParagraphComponent>

                    <Fade>
                        <ImageComponent src={Letter} />
                    </Fade>
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

                    <Acts />
                </div>
            </div>
            <Footer />
        </>
    )
}
