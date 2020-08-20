/**
 *
 * Asynchronously loads the component for SimulationPage
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
