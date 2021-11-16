import { connect } from 'react-redux';
import CountriesList from './CountriesList';
import { AppThunkDispatch, RootState } from '../../../redux/Store';
import { Thunks } from '../../../redux/action-creators/thunks';
import { AC } from '../../../redux/action-creators/action-creators';

const countryFilter = (
  searchInputTxt: string,
  countries: any
) => {
  let countriesCopy;
  if (!searchInputTxt) {
    countriesCopy = [...countries];
  } else {
    countriesCopy = countries.filter((country: any) => {
      if (
        country.name.toLowerCase()
          .search(searchInputTxt.toLowerCase()) !== -1

        || country.capital.toLowerCase()
          .search(searchInputTxt.toLowerCase()) !== -1
      ) {
        return country;
      }
      return null;
    });
  }
  return countriesCopy;
};

const excretion = (name: string, inputText: string) => {
  const countryIndex = name.toLowerCase().search(inputText.toLowerCase());
  return (
    <>
      {countryIndex !== -1 ? (
        <>
          {name.slice(0, countryIndex)}
          <span className="mark">
            {name.slice(countryIndex, countryIndex + inputText.length)}
          </span>
          {name.slice(countryIndex + inputText.length)}
        </>
      ) : (
        <>{name}</>
      )}
    </>
  );
};

const MapStateToProps = ({
  langReducer,
  searchReducer: { text },
  countryReducer: {
    loading,
    error, countries
  }
}:RootState) => {
  const countriesArray = countries.map((el:any) => ({
    name: el[`name${langReducer.lang.toUpperCase()}`],
    capital: el.capital[langReducer.lang],
    photo: el.photo,
    nameEN: el.nameEN
  }));
  return {
    countriesList: countryFilter(text, countriesArray),
    loading,
    error,
    text
  };
};

const MapDispatchToProps = (dispatch: AppThunkDispatch) => ({
  getCountries: () => { dispatch(Thunks.fetchCountries()); },
  setSearchIsDisabled: () => dispatch(AC.setSearchIsDisabled(false)),
  setExcretion: (name: string, inputText: string) => excretion(name, inputText)
});

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountriesList);

export default CountryListContainer;
