import axios from 'axios';
import { AppThunkDispatch } from '../Store';
import { AC } from './action-creators';
import { ACTIONS, URL } from '../constants';

const handleErrors = (response: Response) => {
  console.log(response);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: ACTIONS.LOGOUT
  };
};

export const Thunks = {
  fetchCountries() {
    return async (dispatch: AppThunkDispatch) => {
      const resp = await fetch(`${URL.BASE}${URL.COUNTRIES}/0`);
      handleErrors(resp);
      const data = await resp.json();
      dispatch(AC.fetchStateSuccess(data.countries));
    };
  },

  fetchDetails(country: string) {
    return async (dispatch: AppThunkDispatch) => {
      const resp = await fetch(`${URL.BASE}${URL.COUNTRY_INFO}/${country}`);
      handleErrors(resp);
      const details = await resp.json();
      dispatch(AC.fetchDetailsSuccess(details));
    };
  },

  fetchDetailsWithoutState(link: string) {
    return async (dispatch: AppThunkDispatch) => {
      const resp = await fetch(`${URL.BASE}${URL.COUNTRIES}/0`);
      handleErrors(resp);
      const data = await resp.json();
      await dispatch(await AC.fetchStateSuccess(data.countries));
      const respDetails = await fetch(`${URL.BASE}${URL.COUNTRY_INFO}/${link}`);
      handleErrors(respDetails);
      const details = await respDetails.json();
      dispatch(AC.fetchDetailsSuccess(details));
    };
  },

  login: (username: string, password: string) => async (dispatch: AppThunkDispatch) => {
    try {
      const response = await axios.post(`${URL.BASE}${URL.LOGIN}`, {
        username,
        password
      });
      dispatch(AC.setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
    }
  },

  auth: () => async (dispatch: AppThunkDispatch) => {
    try {
      const response = await axios.get(`${URL.BASE}${URL.VALIDATE}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      dispatch(AC.setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      localStorage.removeItem('token');
    }
  },

  registration: (username: string, password: string) => async (dispatch: AppThunkDispatch) => {
    console.log(dispatch);
    try {
      await axios.post(`${URL.BASE}${URL.REGISTR}`, {
        username,
        password
      });
    } catch (e) {
      console.log(e);
    }
  }
};
