import { createReducer } from 'redux-act';

import { testAction } from '../actions';

const defaultState = {
    something: true,
    data: {}
};

export default createReducer(
    {
        [testAction]: (state, something) => ({ ...state, something })
    },
    defaultState
);
