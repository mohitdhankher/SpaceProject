 import { take, call, put, select, takeLatest } from 'redux-saga/effects';
 import { GET_SCENARIOS} from './constants'
 import request from '../../utils/request';
 import {got_Scenarios} from "./actions";
 import config from '../../config.json';

 const { apiHostUrl } = config;

 export function* getScenarios() {
     const APIUrl = apiHostUrl+"/view-all-scenario";

     try {
         const scenarioData = yield call(request, APIUrl);
         console.log(scenarioData)
         //const yeah = [...scenarioData.scenarioDetails[0].scenario_details.bar_graph , ...scenarioData.scenarioDetails[0].scenario_details.product_info[0] ];
        // const yeah = scenarioData.scenarioDetails[0].scenario_details.product_info[0] ;
        //  console.log( yeah);
         //const final_data = scenarioData.map()
         yield put(got_Scenarios(scenarioData));
     }
     catch (e) {

     }

 }
export default function* scenariosSaga() {
        yield  takeLatest(GET_SCENARIOS,getScenarios);
}
