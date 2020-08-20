/*
 *
 * Scenarios reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION , GET_SCENARIOS, GOT_SCENARIOS} from "./constants";

export const initialState = {
    ScenarioTableData:[
        {
            id: "1",
            datetime: "12th Dec-12:00",
            scenario_name:"Weekly Review with Matt",
            oosrisk:"15%",
            lowrisk:"20%",
            medrisk:"25%",
            hsrisk:"10%",
            description:"CTSlit 10L DR DE",
        },
        {
            id: "2",
            datetime: "16th Jan-14:52",
            scenario_name:"Periodic Update PI",
            oosrisk:"15%",
            lowrisk:"10%",
            medrisk:"15%",
            hsrisk:"5%",
            description:"WHIKnuspertasch",
        },
        {
            id: "3",
            datetime: "16th Jan-14:52",
            scenario_name:"Periodic Update PI",
            oosrisk:"15%",
            lowrisk:"10%",
            medrisk:"15%",
            hsrisk:"5%",
            description:"WHIKnuspertasch",
        }
    ]
};

/* eslint-disable default-case, no-param-reassign */
const scenariosReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case  GET_SCENARIOS:
          draft.ScenarioTableData = [];
            break;
      case GOT_SCENARIOS:
          draft.ScenarioTableData = action.data.scenarioDetails;
          break;
    }
  });

export default scenariosReducer;
