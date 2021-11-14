import {
  ADD,
  SET_COUNTRIES,
  SET_COUNTRY,
  SET_LANGUAGE,
  SET_SEARCH,
  SET_SEARCH_IS_DISABLED
} from '../actions/actionTypes';

export function add() {
  return {
    type: ADD
  };
}

export const setCountries = (countries: any[]) => ({
  type: SET_COUNTRIES,
  countries
});

export const setCountry = (country: string) => ({
  type: SET_COUNTRY,
  country
});

export const setLanguage = (lang: string) => ({
  type: SET_LANGUAGE,
  lang
});

export const setSearch = (inputText: string) => ({
  type: SET_SEARCH,
  inputText
});

export const setSearchIsDisabled = (value: any) => ({
  type: SET_SEARCH_IS_DISABLED,
  value
});
