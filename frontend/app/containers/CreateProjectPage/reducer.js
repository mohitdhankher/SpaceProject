/*
 *
 * CreateProjectPage reducer
 *
 */
import produce from "immer";
import {
    CREATE_PROJECT,
    DEFAULT_ACTION, IS_CREATED,
    PROJECT_DETAILS,
} from "./constants";

export const initialState = {
    projectDetails : {
        projectTitle : '',
        description : '',
        startDate : '',
        runPeriod : '',
        deadPeriod : '',
        stores : '',
        division : '',
        territory : '',
        channel : '',
        subChannel : ''
    },
    isProjectCreated : false
};

/* eslint-disable default-case, no-param-reassign */
const createProjectPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
        case CREATE_PROJECT:
            console.log(action.project);
            draft.projectDetails = action.project;
            break;
        case PROJECT_DETAILS:
            console.log(action.project);
            draft.projectDetails = action.project;
            break;
        case IS_CREATED:
            console.log(action.project);
            draft.isProjectCreated = action.project;
            break;
    }
  });

export default createProjectPageReducer;
