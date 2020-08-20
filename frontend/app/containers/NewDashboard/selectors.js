import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the newDashboard state domain
 */

const selectNewDashboardDomain = state => state.newDashboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewDashboard
 */

const makeSelectNewDashboard = () =>
  createSelector(
    selectNewDashboardDomain,
    substate => substate
  );

const makeSelectDataParams = () =>
    createSelector(
        selectNewDashboardDomain,
        substate => substate.TableParam
    );

const makeSelectDashboardTabledata = () =>
    createSelector(
        selectNewDashboardDomain,
        substate => substate.tableData
    );

const makeSelectDashboardUserID = () =>
    createSelector(
        selectNewDashboardDomain,
        substate => substate.userID
    );
const makeSelectDashboardScenarioInfo = () =>
    createSelector(
        selectNewDashboardDomain,
        substate => substate.ScenarioInfo
    );


export default makeSelectNewDashboard;
export { selectNewDashboardDomain, makeSelectDashboardTabledata, makeSelectDataParams, makeSelectDashboardUserID, makeSelectDashboardScenarioInfo };


