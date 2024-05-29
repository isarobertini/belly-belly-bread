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

export const Performance = () => {
    return (
        <>
            <div className="bg-pink-light">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="flex flex-col items-center bg-brown-dark">
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

                        <ParagraphComponent>The operetic persona The diva strong the diva broad the diva long The diva crying The diva screaming The diva laughing The diva running The diva sleeping The diva breathing The diva scattering The diva dripping The diva numbing The diva soothing The diva trembling The diva strong The diva thong My diva cooking The diva sensous The diva rhythm The divas cycles The diva funny The diva bunny The diva hands The diva mouth The diva head The diva chest The diva size The diva thighs The diva sick The diva kick The diva bread The diva belly The diva head The diva chicken legs The diva back Thee diva rack The diva attack The diva ground The diva dips The diva flames The diva clouds The diva smack The diva track The diva crew The diva mooo The more The soar Diva here take all of it Diva me diva you diva diva The strong the song the ding a dong Diva destiny Diva exit Diva mort Diva is that your sort? Diva is splendid Diva is love</ParagraphComponent>

                    </div>

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
                    </div ></div ></div >
        </>
    )
}