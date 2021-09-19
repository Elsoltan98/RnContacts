import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from './../config/env';

let headers = {};

const instance = axios.create({
  baseURL: `${envs.DEV_BACKEND_URL}`,
  headers,
});

console.log('envs_BACKEND => ', envs.DEV_BACKEND_URL);

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

export default instance;
