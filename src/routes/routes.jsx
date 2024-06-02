import { Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Performance } from "../pages/Performance";
import { Installation } from "../pages/Installation";
import { NotFound } from "../pages/NotFound";
import { Collaborations } from "../pages/Collaborations";
import { About } from "../pages/About";
import { TheCookbook } from "../pages/TheCookbook";
import { PerformanceAct1 } from "../pages/PerformanceAct1";
import { PerformanceAct2 } from "../pages/PerformanceAct2";
import { PerformanceAct3 } from "../pages/PerformanceAct3";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/performance/act1" element={<PerformanceAct1 />} />
        <Route path="/performance/act2" element={<PerformanceAct2 />} />
        <Route path="/performance/act3" element={<PerformanceAct3 />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/theCookBook" element={<TheCookbook />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    </>
);

export default routes;