import axios from 'axios';
import { AppThunkDispatch } from '../Store';
import { AC } from './action-creators';
import { URL } from '../constants';
import { WeatherApiResponse } from '../../Interfaces';

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
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
      // console.log(e);
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

  registration: (username: string, password: string) => async () => {
    try {
      await axios.post(`${URL.BASE}${URL.REGISTR}`, {
        username,
        password
      });
    } catch (e) {
      // console.log(e);
    }
  },

  getWeather: (lang: string, capital: string) => async (dispatch: AppThunkDispatch) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=${
      lang === 'be' ? 'ua' : lang
    }&appid=dd191359a921b4e3412b6d7b1fb83f95&units=metric`;
    const res = await fetch(url);
    const data:WeatherApiResponse = await res.json();
    dispatch(AC.setWeather({
      id: `owf-${data.weather[0].id}`,
      description: data.weather[0].description,
      temp: data.main.temp
    }));
  }
};
