import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the dashBoardLandingSuccess state domain
 */

const selectDashBoardLandingSuccessDomain = state =>
  state.dashBoardLandingSuccess || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashBoardLandingSuccess
 */

const makeSelectDashBoardLandingSuccess = () =>
  createSelector(
    selectDashBoardLandingSuccessDomain,
    substate => substate
  );

export default makeSelectDashBoardLandingSuccess;
export { selectDashBoardLandingSuccessDomain };
