import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { NumberCircleComponent } from "../reusableComponents/numberCircleComponent";

import AboutBellyBread from "../assets/about/about.webp"

export const About = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>


            <div className="h-auto flex flex-col items-center bg-brown-dark ">
                <div className="md:w-6/12 justify-center">
                    <HeadingComponent>About</HeadingComponent>

                    <NumberCircleComponent number={6} />

                    <ImageComponent src={AboutBellyBread} />
                    <ParagraphComponent>Let me tell you a story about three divas The one is 150 years old, a cottage modernist lesbian that is called the mother of the modernist The second is 101, a full on opera queen from grece, an ugly duckling with a strong mother. And the third,96 and a nordic housewife princess which btw also is my grandmother. They are all connected to Nyc, the greek and the lesbian grew up there and the housewife princess moved with her husband and children in 1959 They are all obsessed with clothes They are all food lovers? What sizes do they have? What is there star sign? What love affairs What rumours? What humour? What finance? What documentary? STEIN She wrote about life that had been left out of literature, she wrote about ”food, rooms” and ”objects” in tender buttons She never lived to see any of her openly lesbian works in print. People didn’t like it, not even her brother so she said,” I write for myself and strangers” She wrote to her partner Alice, with Alice about Alice and for Alice. They lived for 39 years together. Stein began writing on Lifting Belly in Mallorca, 1915. And continued in the car ( stein drove and Alice did everything else) they drove around France and helped soldiers, they named a soldier ”kiddie” In 1917 Gertrude completed lifting belly, with the war still going on. It was published in 1953 in time Vine . Lifting belly eroticises in the everyday words and actions. Lifting belly is an action. Stein is heavy with the weight lying on her, the dusty old books telling her that female sexuality is either precious and frail or evil and dangerous. With lifting belly stein needs to find peace with herself. When she askes the man to thank her, it upsets the lifting belly and she disappears. ” too much attention to anger at men will make lesbian sexuality disappear” Asking politely, how do you do? we like a fire and we don’t mind if it smokes. The tongues, the mouths, the breathing. Digesting is time is life. Lifting belly must be both kind and strong, fire and linen, fierce and tender Stein showes how to write passionate. The opera and the burr Heavy on the weight of the bread heavy and needed to burr after being full.</ParagraphComponent>
                </div>
            </div>
        </>
    )
}