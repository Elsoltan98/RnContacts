import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionsType';
import instance from '../../../helpers/axiosInterceptors';
import {Form} from '../../../screens/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAuthState =
  () => (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: CLEAR_AUTH_STATE,
    });
  };

export default ({userName: username, password}: Form) =>
  (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    dispatch({
      type: LOGIN_LOADING,
    });
    instance
      .post('auth/login', {
        username,
        password,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));

        return dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        return dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {err: 'Something went wrong !'},
        });
      });
  };
