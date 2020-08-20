import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
    createSelector(
        selectLoginPageDomain,
        substate => substate
    );

const makeSelectAuth = () =>
    createSelector(
        selectLoginPageDomain,
        substate => substate.IsAuth
    );
const makeSelectLoginUserCred = () =>
    createSelector(
        selectLoginPageDomain,
        substate => substate.userCred
    );
const makeSelectLoginScenarioString = () =>
    createSelector(
        selectLoginPageDomain,
        substate => substate.Scenario_String
    );

export default makeSelectLoginPage;
export { selectLoginPageDomain, makeSelectAuth, makeSelectLoginUserCred, makeSelectLoginScenarioString };
