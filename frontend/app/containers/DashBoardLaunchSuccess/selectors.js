import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the dashBoardLaunchSuccess state domain
 */

const selectDashBoardLaunchSuccessDomain = state =>
  state.dashBoardLaunchSuccess || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashBoardLaunchSuccess
 */

const makeSelectDashBoardLaunchSuccess = () =>
  createSelector(
    selectDashBoardLaunchSuccessDomain,
    substate => substate
  );

export default makeSelectDashBoardLaunchSuccess;
export { selectDashBoardLaunchSuccessDomain };
