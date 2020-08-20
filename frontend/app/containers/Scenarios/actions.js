/*
 *
 * Scenarios actions
 *
 */

import { DEFAULT_ACTION, GET_SCENARIOS , GOT_SCENARIOS} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function get_Scenarios() {
  return {
    type: GET_SCENARIOS
  };
}

export function got_Scenarios(data) {
return{
  type: GOT_SCENARIOS,
  data
}
}

