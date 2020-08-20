import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the createProjectPage state domain
 */

const selectCreateProjectPageDomain = state => state.createProjectPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateProjectPage
 */

const makeSelectCreateProjectPage = () =>
  createSelector(
    selectCreateProjectPageDomain,
    substate => substate
  );

const makeSelectProjectDetails = () =>
    createSelector(
        selectCreateProjectPageDomain,
        substate => substate.projectDetails
    );

const makeSelectIsCreated = () =>
    createSelector(
        selectCreateProjectPageDomain,
        substate => substate.isProjectCreated
    );

export default makeSelectCreateProjectPage;
export { selectCreateProjectPageDomain, makeSelectProjectDetails, makeSelectIsCreated };
