import { takeLatest, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

import { BASE_URL } from '../constants';

function* search({value}) {
    try {
        yield put({ type: 'FETCH_SEARCH_PENDING'});
        const response = yield axios.get(`${BASE_URL}/items?search=${value}`);
        yield put({ type: 'FETCH_SEARCH_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_SEARCH_ERROR', error });
    }
}

function* goRoute({ route }) {
    yield put(push(route));
}

export default function* saga() {
    yield all ([
        yield takeLatest('GO_TO_ROUTE', goRoute),
        yield takeLatest('FETCH_SEARCH', search),
    ]);
}