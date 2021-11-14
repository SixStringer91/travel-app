import axios from 'axios';
import { SET_USER, LOGOUT } from './actionTypes';

const baseURL = 'https://damp-thicket-85004.herokuapp.com';
const registerURL = '/users/register';

export const setUser = (user: string) => ({
  type: SET_USER,
  payload: user
});

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT
  };
};

export const login = (username: string, password: string) => async (dispatch: any) => {
  try {
    const response = await axios.post(`${baseURL}/users/login`, {
      username,
      password
    });

    dispatch(setUser(response.data.user));

    localStorage.setItem('token', response.data.token);
  } catch (e) {
    console.log(e);
  }
};

export const auth = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${baseURL}/users/validate`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
  } catch (e) {
    localStorage.removeItem('token');
  }
};

export const registration = async (username: string, password: string) => {
  try {
    await axios.post(`${baseURL}${registerURL}`, {
      username,
      password
    });
  } catch (e) {
    console.log(e);
  }
};
