import { connect } from 'react-redux';
import { AC } from '../../../../redux/action-creators/action-creators';
import { Thunks } from '../../../../redux/action-creators/thunks';
import { AppThunkDispatch, RootState } from '../../../../redux/Store';
import CountryPage from './CountryPage';

const MapState = ({
  language, countryPage, country
}: RootState, { link }:{ link:string }) => ({
  link,
  lang: language.lang,
  loading: countryPage.loading,
  countryDetails: countryPage.data.details,
  country: country.countries.length
    ? country.countries.find(
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
