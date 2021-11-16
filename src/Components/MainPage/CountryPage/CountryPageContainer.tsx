import { connect } from 'react-redux';
import CountryPage from './CountryPage';

import { AppThunkDispatch, RootState } from '../../../redux/Store';
import { Thunks } from '../../../redux/action-creators/thunks';
import { AC } from '../../../redux/action-creators/action-creators';

const MapState = ({
  langReducer, countryPageReducer, countryReducer
}: RootState, { link }:{ link:string }) => ({
  link,
  lang: langReducer.lang,
  loading: countryPageReducer.loading,
  countryDetails: countryPageReducer.data.details,
  country: countryReducer.countries.length
    ? countryReducer.countries.find(
      (el) => el.nameEN === link
    ) : null
});

const MapDispatch = (dispatch: AppThunkDispatch) => ({
  fetchDeleteDetails: () => dispatch(AC.deleteDetails()),
  fetchDetails: (name: string) => dispatch(Thunks.fetchDetails(name)),
  setSearchIsDisabled: () => dispatch(AC.setSearchIsDisabled(true)),
  fetchDetailsWithoutState: (link: string) => dispatch(
    Thunks.fetchDetailsWithoutState(link)
  )
});

const CountryListContainer = connect(
  MapState,
  MapDispatch
)(CountryPage);

export default CountryListContainer;
