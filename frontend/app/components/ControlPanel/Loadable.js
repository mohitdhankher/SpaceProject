/**
 *
 * Asynchronously loads the component for ControlPanel
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
