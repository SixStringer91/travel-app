import { ICountry } from '../../Interfaces';
import { ACTIONS } from '../constants';

export const AC = {
  add: () => ({
    type: ACTIONS.ADD
  }) as const,

  setCountries: (countries: ICountry[]) => ({
    type: ACTIONS.SET_COUNTRIES,
    payload: countries
  }) as const,

  setCountry: (country: string) => ({
    type: ACTIONS.SET_COUNTRY,
    payload: country
  }) as const,

  setLanguage: (lang: string) => ({
    type: ACTIONS.SET_LANGUAGE,
    payload: lang
  }) as const,

  setSearch: (inputText: string) => ({
    type: ACTIONS.SET_SEARCH,
    payload: inputText
  }) as const,

  setSearchIsDisabled: (value: boolean) => ({
    type: ACTIONS.SET_SEARCH_IS_DISABLED,
    payload: value
  }) as const,

  setUser: (user: string) => ({
    type: ACTIONS.SET_USER,
    payload: user
  }) as const,

  fetchStateBegin: () => ({
    type: ACTIONS.FETCH_STATE_BEGIN
  }) as const,

  fetchStateSuccess: (countries: ICountry[]) => ({
    type: ACTIONS.FETCH_STATE_SUCCESS,
    payload: countries
  }) as const,

  fetchStateFailure: (error: any) => ({
    type: ACTIONS.FETCH_STATE_FAILURE,
    payload: { error }
  }) as const,

  fetchDetailsSuccess: (details: ICountry) => ({
    type: ACTIONS.FETCH_DETAILS_SUCCESS,
    payload: details
  }) as const,

  deleteDetails: () => ({
    type: ACTIONS.FETCH_DELETE_DETAILS
  }) as const,

  logout: () => ({
    type: ACTIONS.LOGOUT
  }) as const
};

type PropertiesType<T> = T extends { [key: string]: infer U }
  ? U : never;

export type ReturnedAction = ReturnType<PropertiesType<typeof AC>>
