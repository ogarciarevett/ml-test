import { takeLatest, all } from 'redux-saga/effects';

import { testAction } from '../actions';

import { search } from './navegation';

export default function* saga() {
    yield all ([
        yield takeLatest(testAction.getType(), search),
    ]);
}