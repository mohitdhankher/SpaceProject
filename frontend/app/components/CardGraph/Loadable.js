/**
 *
 * Asynchronously loads the component for CardGraph
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
