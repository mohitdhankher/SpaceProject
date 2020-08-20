/*
 *
 * LoginPage reducer
 *
 */
import produce from "immer";
import {DEFAULT_ACTION, EMAIL, LOGIN_USER, PASSWORD, SAVE_SCENARIOSTRING} from "./constants";

export const initialState = {
    userCred:{
        userID:"",
        password:""
    },
    IsAuth: false,
    Scenario_String:"",
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
    produce(state, ( draft ) => {
        switch (action.type) {
            case DEFAULT_ACTION:
                break;
            case LOGIN_USER:
                break;
            case EMAIL:
                draft.userCred.userID = action.UserCred;
                break;
            case PASSWORD:
                draft.userCred.password = action.UserCred;
                break;
            case SAVE_SCENARIOSTRING:
                console.log("AT SAVE SCENARIO REDUCER");
                // draft.IsAuth = true;
                draft.Scenario_String = action.scenarioString;
                document.cookie = `scenarioString=${draft.Scenario_String}`;
                document.cookie = `UserInfo=${ JSON.stringify(draft.userCred)}`;
                window.location.href="/Newdashboard";
                break;
        }
    });

export default loginPageReducer;
