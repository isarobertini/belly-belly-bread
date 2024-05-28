import { Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Performance } from "../pages/Performance";
import { References } from "../pages/References";
import { NotFound } from "../pages/NotFound";
import { Collaborations } from "../pages/Collaborations";
import { About } from "../pages/About";
import { TheCookbook } from "../pages/TheCookbook";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/references" element={<References />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/theCookBook" element={<TheCookbook />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    </>
);

export default routes;