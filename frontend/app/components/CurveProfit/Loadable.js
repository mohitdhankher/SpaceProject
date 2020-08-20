/**
 *
 * Asynchronously loads the component for CurveProfit
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
