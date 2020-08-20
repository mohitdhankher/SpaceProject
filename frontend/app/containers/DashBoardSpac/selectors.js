import { createSelector } from "reselect";
import { initialState } from "./reducer";
import {selectLoginPageDomain} from "../LoginPage/selectors";

/**
 * Direct selector to the dashBoardSpac state domain
 */

const selectDashBoardSpacDomain = state => state.dashBoardSpac || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashBoardSpac
 */

const makeSelectDashBoardSpac = () =>
  createSelector(
    selectDashBoardSpacDomain,
    substate => substate
  );
const makeSelectSpaceXdata = () =>
    createSelector(
        selectDashBoardSpacDomain,
        substate => substate.spaceXdatastor
    );
export default makeSelectDashBoardSpac;
export { selectDashBoardSpacDomain ,makeSelectSpaceXdata};
