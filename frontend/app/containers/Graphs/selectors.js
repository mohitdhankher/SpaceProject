import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the graphs state domain
 */

const selectGraphsDomain = state => state.graphs || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Graphs
 */

const makeSelectGraphs = () =>
  createSelector(
    selectGraphsDomain,
    substate => substate
  );

export default makeSelectGraphs;
export { selectGraphsDomain };
