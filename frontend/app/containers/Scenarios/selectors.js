import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the scenarios state domain
 */

const selectScenariosDomain = state => state.scenarios || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Scenarios
 */

const makeSelectScenarios = () =>
  createSelector(
    selectScenariosDomain,
    substate => substate
  );
const makeSelectScenariosGetScenarioTableData = () =>
    createSelector(
        selectScenariosDomain,
        substate => substate.ScenarioTableData
    );

export default makeSelectScenarios;
export { selectScenariosDomain, makeSelectScenariosGetScenarioTableData };
