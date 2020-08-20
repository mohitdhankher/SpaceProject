/**
 *
 * Asynchronously loads the component for NewDashboard
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
