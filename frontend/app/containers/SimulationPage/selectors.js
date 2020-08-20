import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the simulationPage state domain
 */

const selectSimulationPageDomain = state =>
  state.simulationPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SimulationPage
 */

const makeSelectSimulationPage = () =>
  createSelector(
    selectSimulationPageDomain,
    substate => substate
  );

export default makeSelectSimulationPage;
export { selectSimulationPageDomain };
