import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from "../../utils/request";
import {LOGIN_USER} from "./constants";
import  {save_ScenarioString} from './actions'
import {makeSelectLoginUserCred} from './selectors';
import config from '../../config.json';
import history from '../../utils/history';

//const { azureHostUrl } = config;

export function* checkUser() {
    const user =  yield select(makeSelectLoginUserCred());
    if(user.userID !== "") {
        const APIUrl = `http://10.1.248.30/auth/api/obtain-user-params?username=${user.userID}`;
        let username = user.userID;
        let password = user.password;
        try {
            const data = yield call(request, APIUrl, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({username, password})
            });

             yield history.push("/createproject");
        }catch (e) {
            console.log("logging exception", e);
        }
    }
}

// Individual exports for testing
export default function* loginPageSaga() {
    yield takeLatest(LOGIN_USER,checkUser);
}
