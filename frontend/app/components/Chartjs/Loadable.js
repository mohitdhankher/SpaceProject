/**
 *
 * Asynchronously loads the component for Chartjs
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
