/**
 *
 * Asynchronously loads the component for RoiNavBar
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
