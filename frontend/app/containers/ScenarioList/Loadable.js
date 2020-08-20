/**
 *
 * Asynchronously loads the component for ScenarioList
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
