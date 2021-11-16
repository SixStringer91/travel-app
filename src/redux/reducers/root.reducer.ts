import { combineReducers } from 'redux';
import countryReducer from './countries.reducer';
import langReducer from './lang.reducer';
import searchReducer from './search.reducer';
import countryPageReducer from './country-page.reducer';
import userReducer from './user.reducer';

const reducers = combineReducers({
  countryReducer,
  langReducer,
  searchReducer,
  countryPageReducer,
  userReducer
});

export default reducers;
