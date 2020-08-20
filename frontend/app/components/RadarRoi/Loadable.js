/**
 *
 * Asynchronously loads the component for RadarRoi
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
