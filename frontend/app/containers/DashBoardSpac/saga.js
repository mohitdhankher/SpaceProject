// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import {call, select, takeLatest,put} from "redux-saga/effects";
import {makeSelectSpaceXdata} from "../DashBoardSpac/selectors";
import request from "../../utils/request";
import history from "../../utils/history";
import {SpaceXdataConst} from "./constants";
import {SavespaceXdata} from "./actions";
export function* checkUser() {
debugger;
    const user =  yield select(makeSelectSpaceXdata());
    if(user !== "") {
      debugger;
        // let username = user.userID;
        // let password = user.password;
        try {
            debugger;
            const data1 = yield call(request, `https://api.spaceXdata.com/v3/launches?limit=100`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                },

            });
            debugger
            yield put(SavespaceXdata(data1))

           return data1
            // yield history.push("/createproject");
        }catch (e) {
            console.log("logging exception", e);
        }
    }

}

export default function* dashBoardSpacSaga() {
  // See example in containers/HomePage/saga.js
    yield takeLatest(SpaceXdataConst,checkUser);
    // yield takeLatest(SaveSpaceXdataConst,saveUser);
}
