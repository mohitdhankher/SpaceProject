/*
 *
 * LoginPage actions
 *
 */

import {DEFAULT_ACTION, EMAIL, LOGIN_USER, PASSWORD, SAVE_SCENARIOSTRING} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}
export function login_User() {
  return{
    type: LOGIN_USER
  }
}

export function email(UserCred) {
  return{
    type: EMAIL,
    UserCred
  }
}

export function password(UserCred) {
  return{
    type: PASSWORD,
    UserCred
  }
}


export function save_ScenarioString(scenarioString) {
  console.log("At save_ScenarioString action - "+ scenarioString);
  return{
    type: SAVE_SCENARIOSTRING,
    scenarioString
  }
}