import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from './../config/env';
import {navigate} from '../navigations/SideMenu/RootNavigator';
import {CREATE_CONTACT, LOGOUT} from '../constants/routeNames';

let headers = {};

const instance = axios.create({
  baseURL: envs.DEV_BACKEND_URL,
  headers,
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
      console.log(error.response);
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default instance;
