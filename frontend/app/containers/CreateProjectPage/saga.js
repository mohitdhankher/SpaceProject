 import {take, call, put, select, takeLatest} from 'redux-saga/effects';

 import makeSelectCreateProjectPage, {makeSelectIsCreated} from "./selectors";
 import {CREATE_PROJECT} from "./constants";
 import {is_Created} from './actions'

 export function* createProject() {
     const projectDetails =  yield select(makeSelectCreateProjectPage());
     let isCreated = yield select(makeSelectIsCreated());
     try {
         isCreated = true;
         yield put(is_Created(isCreated));
     }
     catch(e) {
         console.log(e);
     }
 }

export default function* createProjectPageSaga() {
    yield takeLatest(CREATE_PROJECT,createProject);
}
