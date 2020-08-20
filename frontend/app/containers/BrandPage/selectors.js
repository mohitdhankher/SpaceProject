import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the brandPage state domain
 */

const selectBrandPageDomain = state => state.brandPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BrandPage
 */

const makeSelectBrandPage = () =>
  createSelector(
    selectBrandPageDomain,
    substate => substate
  );

export default makeSelectBrandPage;
export { selectBrandPageDomain };
