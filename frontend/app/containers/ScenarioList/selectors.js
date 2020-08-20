import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the scenarioList state domain
 */

const selectScenarioListDomain = state => state.scenarioList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ScenarioList
 */

const makeSelectScenarioList = () =>
  createSelector(
    selectScenarioListDomain,
    substate => substate
  );

export default makeSelectScenarioList;
export { selectScenarioListDomain };
