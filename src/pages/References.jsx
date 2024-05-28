import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { SoundComponent } from "../reusableComponents/soundComponent";
import SoundPlaceholder from "../assets/performance/placeholder_sound.wav"
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { NumberCircleComponent } from "../reusableComponents/numberCircleComponent";

export const References = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>
            <div className="bg-brown-dark">
                <div className="flex flex-col items-center">
                    <div className="md:w-6/12 justify-center">
                        <HeadingComponent>References</HeadingComponent>

                        <NumberCircleComponent number={4} />

                        <SubHeadingComponent>(Gertrude Stein)</SubHeadingComponent>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <SubHeadingComponent>Sound: Lifting Belly</SubHeadingComponent>
                    <SoundComponent src={SoundPlaceholder} />
                </div>
                <div className="flex flex-col items-center ">
                    <div className="md:w-6/12 justify-center">
                        <SubHeadingComponent>Diva Poem</SubHeadingComponent>
                        <ParagraphComponent>The operetic persona The diva strong the diva broad the diva long The diva crying The diva screaming The diva laughing The diva running The diva sleeping The diva breathing The diva scattering The diva dripping The diva numbing The diva soothing The diva trembling The diva strong The diva thong My diva cooking The diva sensous The diva rhythm The divas cycles The diva funny The diva bunny The diva hands The diva mouth The diva head The diva chest The diva size The diva thighs The diva sick The diva kick The diva bread The diva belly The diva head The diva chicken legs The diva back Thee diva rack The diva attack The diva ground The diva dips The diva flames The diva clouds The diva smack The diva track The diva crew The diva mooo The more The soar Diva here take all of it Diva me diva you diva diva The strong the song the ding a dong Diva destiny Diva exit Diva mort Diva is that your sort? Diva is splendid Diva is love</ParagraphComponent>
                    </div>
                </div>
            </div>
        </>
    )
}