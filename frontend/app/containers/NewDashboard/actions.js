/*
 *
 * Dashboard actions
 *
 */

import { DEFAULT_ACTION , FETCH_TABLEDATA, SAVE_TABLEDATA, SAVE_SCENARIOKASSANDRA, SAVE_SCENARIO , TOGGLE_TABLEDATA, GET_USERINFO} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}
export function fetch_TableData(dataParam) {
  console.log("in action" + JSON.stringify(dataParam));
  return{
    type:FETCH_TABLEDATA,
    dataParam
  };
}

export  function Save_TableData(data) {
  return{
    type:SAVE_TABLEDATA,
    data
  }
}
export function save_ScenarioKassandra(data) {

  return{
    type: SAVE_SCENARIOKASSANDRA,
    data
  }
}


export function toggle_Tabledata(data){
  return{
    type: TOGGLE_TABLEDATA,
    data
  }
}

export function save_Scenario() {
  return{
    type: SAVE_SCENARIO,
  }
}
export function getUserInfo(data) {
  return{
    type: GET_USERINFO,
    data
  }
}
