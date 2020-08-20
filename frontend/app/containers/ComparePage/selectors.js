import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the comparePage state domain
 */

const selectComparePageDomain = state => state.comparePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ComparePage
 */

const makeSelectComparePage = () =>
  createSelector(
    selectComparePageDomain,
    substate => substate
  );

export default makeSelectComparePage;
export { selectComparePageDomain };
