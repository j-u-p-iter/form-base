import { all, fork, take, put, call, select } from 'redux-saga/effects';
import axios from 'axios';

import { formBaseActionCreators } from '../actionCreators';
import { formBaseActions } from '../actions';

const createDataSender = (method) => (url, data) => axios[method](url, data)
const saveData = createDataSender('post');
const updateData = createDataSender('post');

function* onSaveFormDataSaga(url) {
  while(true) {
    const { payload: { formType } } = yield take(formBaseActions.SUBMIT_FORM);
    const data = yield select(state => state.forms[formType]);
    const result = yield call(saveData, url, data);

    yield put(formBaseActionCreators.submitFormWithSuccess(result));
  }
}


const createFormBaseSaga = ({ paths: { save } }) => {
  return function* formBaseSaga() {
    yield all([
      fork(onSaveFormDataSaga, save),
    ]);
  }
};


export default createFormBaseSaga;
