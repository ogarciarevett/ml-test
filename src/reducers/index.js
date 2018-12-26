import { combineReducers } from 'redux';
import detailsReducer from './details.reducer';
import searchReducer from './search.reducer';
import { connectRouter } from 'connected-react-router';

export default history =>
  combineReducers({
    search: searchReducer,
    details: detailsReducer,
    router: connectRouter(history),
  });
