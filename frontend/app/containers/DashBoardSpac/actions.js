/*
 *
 * DashBoardSpac actions
 *
 */

import { DEFAULT_ACTION } from "./constants";
import {SpaceXdataConst,SaveSpaceXdataConst} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function spaceXdata() {
  return{
    type: SpaceXdataConst,

  }
}
export function SavespaceXdata(spaceXdatastor) {
  return{
    type: SaveSpaceXdataConst,
    spaceXdatastor
  }
}
