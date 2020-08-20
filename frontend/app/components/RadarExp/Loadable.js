/**
 *
 * Asynchronously loads the component for RadarExp
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
