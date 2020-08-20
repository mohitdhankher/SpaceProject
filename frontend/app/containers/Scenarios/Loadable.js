/**
 *
 * Asynchronously loads the component for Scenarios
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
