import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";

export const About = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>

            <div>
                <HeadingComponent>AboutBellyBellyBread</HeadingComponent>
                <ParagraphComponent>AI GENERATED TEXT AS A PLACEHOLDER. "Belly Belly Bread" is an innovative work by Hedda Bauer, created as her diploma project. This piece uniquely combines an opera performance with an installation consisting of bread. The opera explores themes of nourishment and community through music and storytelling, depicting the symbolic importance of bread in human culture. The installation features various forms of bread, engaging multiple senses with its visual, tactile, and olfactory elements. Together, the performance and installation create an immersive experience that highlights the essential human connections fostered by the act of making and sharing bread.</ParagraphComponent>
            </div>
        </>
    )
}