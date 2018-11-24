import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducers from './reducers';
export const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({
        ...reducers,
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(saga);