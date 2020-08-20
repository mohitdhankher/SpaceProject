/**
 *
 * Asynchronously loads the component for HomeNavBar
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
