/**
 *
 * Asynchronously loads the component for Landing
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
