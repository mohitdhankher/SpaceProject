/*
 *
 * DashBoardSpac reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION ,SpaceXdataConst,SaveSpaceXdataConst} from "./constants";
import {EMAIL} from "../LoginPage/constants";

export const initialState = {
   spaceXdatastor:"",
};

/* eslint-disable default-case, no-param-reassign */
const dashBoardSpacReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
        case SpaceXdataConst:
            draft.spaceXdatastor = action.spaceXdatastor;
            break;
        case SaveSpaceXdataConst:
            draft.spaceXdatastor = action.spaceXdatastor;
            break;
    }
  });

export default dashBoardSpacReducer;
