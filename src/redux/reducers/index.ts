import { combineReducers } from 'redux';
import country from './countries.reducer';
import language from './lang.reducer';
import search from './search.reducer';
import countryPage from './country-page.reducer';
import user from './user.reducer';
import weather from './weather.reducer';

const reducers = combineReducers({
  country,
  language,
  search,
  countryPage,
  user,
  weather
});

export default reducers;
