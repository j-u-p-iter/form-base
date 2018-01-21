import { all, fork, take, put, call, select } from 'redux-saga/effects';
import axios from 'axios';

import { formBaseActionCreators } from '../actionCreators';
import { formBaseActions } from '../actions';


const saveForm = (url, data) => !console.log(data) && axios.post(url, data);

function* onSaveFormDataSaga(url) {
  while(true) {
    const { payload: { type } } = yield take(formBaseActions.SUBMIT_FORM);
    const data = yield select(state => state.forms[type]);

    const result = yield call(saveForm, url, data);

    yield put(formBaseActionCreators.submitFormWithSuccess(result));
  }
}


const createFormBaseSaga = ({ savePath }) => {
  return function* formBaseSaga() {
    yield all([
      fork(onSaveFormDataSaga, savePath),
    ]);
  }
};


export default createFormBaseSaga;
