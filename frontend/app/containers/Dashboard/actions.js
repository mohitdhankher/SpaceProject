/*
 *
 * Dashboard actions
 *
 */

import { DEFAULT_ACTION, SAVE_GRAPH_DATA } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}


export function saveGraphData(data) {
  console.log(data);
  return {
    type: SAVE_GRAPH_DATA, data,
  }
}