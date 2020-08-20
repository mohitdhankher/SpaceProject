import { take, call, put, select, takeLatest} from 'redux-saga/effects';
import {FETCH_TABLEDATA, SAVE_SCENARIO, SAVE_SCENARIOKASSANDRA} from './constants'
import {makeSelectDataParams, makeSelectDashboardUserID, makeSelectDashboardScenarioInfo} from './selectors'
import {Save_TableData} from './actions';
import request from '../../utils/request';
import config from '../../config.json'

const{ apiHostUrl, azureHostUrl } = config;

export function* getData() {
    console.log("in saga");
    const Param = yield select(makeSelectDataParams());
    console.log("Params"+ JSON.stringify(Param));
    const APIUrl = azureHostUrl+`/Fetch_User_Selection_Data?selection1=${Param.High}&selection2=${Param.Low}`;
    try{
        const data  = yield call(request,APIUrl);
        console.log(data);
        const tableData = Object.values(data).map(datum => JSON.parse(datum) );
        console.log(tableData);
        yield put(Save_TableData(tableData));
    }catch (e) {
        console.log("At error"+ e);
    }
}
export function* saveScenario() {
    const Param = yield select(makeSelectDataParams());
    const User = yield  select(makeSelectDashboardUserID());
   
    const APIURL = azureHostUrl+`/Write_User_Parameters?user=${User.userID}&selection1=${Param.High}&selection2=${Param.Low}`;
   
    try{
         //COSMOS
         const req =  yield call(request,APIURL);

    }catch (e) {
        console.log(" Result at save scenario TRY CATCH")
    }
}
export  function* saveScenarioKassandra() {
    const API = apiHostUrl+'/save-scenario';
    const ScenarioInfo = yield select(makeSelectDashboardScenarioInfo());
    try{
         //Cassandra
        const req  = yield call(request,API,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ScenarioInfo)
        });
    }catch( e )
    {
        console.log(e);
    }
}
// Individual exports for testing
export default function* newDashboardSaga() {
    yield takeLatest(SAVE_SCENARIO,saveScenario);
    yield takeLatest(FETCH_TABLEDATA, getData);
    yield takeLatest(SAVE_SCENARIOKASSANDRA, saveScenarioKassandra);
}