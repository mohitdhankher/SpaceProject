/**
 *
 * Asynchronously loads the component for RiskCharts
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
