import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";

export const Home = () => {
    return (
        <div>
            <NavigationMenu />
            <HeadingComponent>belly belly home</HeadingComponent>
            <h2>hej hedda, kämpa på med måleriet! du kan nu navigera med hjälp av menyn! ses snart puss</h2>
        </div>
    )
}