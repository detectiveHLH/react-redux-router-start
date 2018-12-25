import { put, takeEvery } from 'redux-saga/effects';
import {delay} from "redux-saga";

export function* fetchProject({ payload }) {
  yield delay(1000);
  yield put({ type: 'GET_PROJECT', payload: { ...payload } });
}

export function* fetchUser({ payload }) {
  yield delay(1000);
  yield put({ type: 'GET_USER', payload: { ...payload } });
}

export default function * rootSaga() {
  yield takeEvery('WATCH_GET_PROJECT', fetchProject);
  yield takeEvery('WATCH_GET_USER', fetchUser);
}