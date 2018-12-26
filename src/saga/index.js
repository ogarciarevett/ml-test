import { takeLatest, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

import { BASE_URL } from '../constants';

function* searchSaga({ value }) {
  try {
    yield put({ type: 'FETCH_SEARCH_PENDING' });
    const response = yield axios.get(`${BASE_URL}/items?search=${value}`);
    yield put({ type: 'FETCH_SEARCH_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_SEARCH_ERROR', error });
  }
}

function* goRouteSaga({ route }) {
  yield put(push(route));
}

function* detailsSaga({ id }) {
  try {
    yield put({ type: 'FETCH_DETAILS_PENDING' });
    const response = yield axios.get(`${BASE_URL}/items/${id}`);
    yield put({ type: 'FETCH_DETAILS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_DETAILS_ERROR', error });
  }
}

export default function* saga() {
  yield all([
    yield takeLatest('FETCH_DETAILS', detailsSaga),
    yield takeLatest('GO_TO_ROUTE', goRouteSaga),
    yield takeLatest('FETCH_SEARCH', searchSaga),
  ]);
}
