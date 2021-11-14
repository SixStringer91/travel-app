import { connect } from 'react-redux';
import CountryPage from './CountryPage';
import {
  setSearchIsDisabled
} from '../../../redux/actionCreators/exampleActionCreator';
import { fetchDetails, fetchDetailsWithoutState } from '../../../redux/actions/stateAction';
import { fetchDeleteDetails } from '../../../redux/actionCreators/fetchData';

const MapStateToProps = (state: any, { link }: any) => ({
  link,
  // eslint-disable-next-line react/destructuring-assignment
  lang: state.langReducer,
  // eslint-disable-next-line react/destructuring-assignment
  loading: state.countryPageReducer.loading,
  // eslint-disable-next-line react/destructuring-assignment
  countryDetails: state.countryPageReducer.data,
  // eslint-disable-next-line react/destructuring-assignment
  country: state.countryReducer.countries.length
    // eslint-disable-next-line react/destructuring-assignment
    ? state.countryReducer.countries.find(
      (el: any) => el.nameEN === link
    ) : null
});

const MapDispatchToProps = (dispatch: any) => ({
  fetchDeleteDetails: () => dispatch(fetchDeleteDetails()),
  fetchDetails: (name: string) => dispatch(fetchDetails(name)),
  setSearchIsDisabled: () => dispatch(setSearchIsDisabled(true)),
  fetchDetailsWithoutState: (link: string) => dispatch(
    fetchDetailsWithoutState(link)
  )
});

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountryPage);

export default CountryListContainer;
