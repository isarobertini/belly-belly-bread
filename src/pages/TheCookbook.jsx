import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { NumberCircleComponent } from "../reusableComponents/numberCircleComponent";

import Letter from "../assets/cookBook/letter.webp"
import Kokbok from "../assets/cookBook/Bakverk.pdf"
export const TheCookbook = () => {


    return (
        <>
            <div>
                <NavigationMenu />
            </div>
            <div className="flex flex-col items-center bg-brown-dark">
                <div className="md:w-6/12 justify-center">
                    <HeadingComponent>The Cookbook</HeadingComponent>

                    <NumberCircleComponent number={3} />

                    <SubHeadingComponent>(Catharina Bauer)</SubHeadingComponent>
                    <SubHeadingComponent>The Letter</SubHeadingComponent>

                    <ImageComponent src={Letter} />


                    <div>
                        <SubHeadingComponent>SWE</SubHeadingComponent>
                        <ParagraphComponent>Marika,
                            här får Du ett tecken till att ignorera.
                            Den har, liksom den riktiga konsten, sitt eget starka uttryck.
                            Alltså beror det på mottagaren att uttolka det, inget mer.
                            Släng den i Din soptunna.
                            Mamma</ParagraphComponent>
                    </div>

                    <div>
                        <SubHeadingComponent>ENG</SubHeadingComponent>
                        <ParagraphComponent>Marika,
                            here you get a sign to ignore.
                            It has, like real art, its own strong expression.
                            Therefore it's up to the recipient to interpret it, nothing more.
                            Throw it in your trash bin.
                            Mom
                        </ParagraphComponent>
                    </div>

                    <div>
                        <SubHeadingComponent>DE</SubHeadingComponent>
                        <ParagraphComponent>Marika,
                            hier bekommst du ein Zeichen, das du
                            zu ignorieren kannst.
                            Es hat, wie die richtigen Künste, seinen eigenen starken Ausdruck gefunden.
                            Also hängt es von dem/der Empfänger*in ab, es zu interpretieren, nichts Weiteres.
                            Wirf es in deine Mülltonne.
                            Mama
                        </ParagraphComponent>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center bg-brown-dark">
                <embed className="my-6 h-screen w-11/12 lg:w-6/12" src={Kokbok} />
            </div>
        </>
    );
};
