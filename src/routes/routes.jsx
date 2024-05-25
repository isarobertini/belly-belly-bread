import { Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Exercises } from "../pages/Exercises";
import { HeddaReading } from "../pages/HeddaReading";
import { BreadPoem } from "../pages/BreadPoem";
import { NotFound } from "../pages/NotFound";
import { Sketches } from "../pages/Sketches";
import { About } from "../pages/About";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/heddaReading" element={<HeddaReading />} />
        <Route path="/bellyBellyBreadPoem" element={<BreadPoem />} />
        <Route path="/sketches" element={<Sketches />} />
        <Route path="/aboutBellyBellyBread" element={<About />} />

        <Route path="*" element={<NotFound />} />
    </>
);

export default routes;