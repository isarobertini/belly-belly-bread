import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { VideoComponent } from "../reusableComponents/videoComponent";
import placeholderVideo from "../assets/heddaReading/placeholder_video.mp4"

export const Exercises = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>

            <div>
                <HeadingComponent>Exercises</HeadingComponent>
                <ParagraphComponent>AI GENERATED TEXT AS A PLACEHOLDER. Opera exercises are specialized vocal practices designed to enhance the skills required for operatic singing. These exercises focus on improving breath control, vocal range, tone quality, and diction. Key exercises include scales, arpeggios, and vocalises, which help singers develop precision and flexibility. Breath control exercises, such as diaphragmatic breathing, strengthen lung capacity and support sustained singing. Articulation drills enhance clarity in enunciating complex lyrics, while resonance exercises refine the richness and projection of the voice. Regular practice of these exercises is essential for opera singers to maintain vocal health and deliver powerful performances.</ParagraphComponent>
            </div >
            <VideoComponent src={placeholderVideo} />
        </>
    )
}