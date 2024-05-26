import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { SoundComponent } from "../reusableComponents/soundComponent";
import SoundPlaceholder from "../assets/heddaReading/placeholder_sound.wav"

export const BreadPoem = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>

            <div>
                <HeadingComponent>BellyBellyBread Poem</HeadingComponent>

                <SoundComponent src={SoundPlaceholder} />

                <ParagraphComponent>
                    <div>In a room where echoes sing,
                        Voices rise on feathered wing,
                        Scales ascend and arpeggios fall,
                        Breath in rhythm, hearts enthrall.
                    </div>
                    <div>
                        Diaphragms like bellows strong,
                        Sustain the notes, prolong the song,
                        Resonance in chest and head,
                        Harmonies in tones widespread.
                    </div>
                    <div>
                        Diction clear as crystal streams,
                        Shapes the words of poets' dreams,
                        Every vowel, every phrase,
                        Crafted in a timeless daze.
                    </div>
                    <div>
                        Exercises, daily done,
                        Forge the art where passions run,
                        Opera’s soul in practice found,
                        In each voice, a world unbound.
                    </div></ParagraphComponent>
            </div>
        </>
    )
}