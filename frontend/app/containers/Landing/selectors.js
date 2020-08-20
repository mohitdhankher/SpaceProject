import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the landing state domain
 */

const selectLandingDomain = state => state.landing || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Landing
 */

const makeSelectLanding = () =>
  createSelector(
    selectLandingDomain,
    substate => substate
  );

export default makeSelectLanding;
export { selectLandingDomain };
