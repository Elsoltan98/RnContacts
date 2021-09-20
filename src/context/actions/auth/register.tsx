import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionsType';
import instance from '../../../helpers/axiosInterceptors';
import {Form} from '../../../screens/Register';

export const clearAuthState =
  () => (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: CLEAR_AUTH_STATE,
    });
  };

export default ({
    userName: username,
    firstName: first_name,
    lastName: last_name,
    email,
    password,
  }: Form) =>
  (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    dispatch({
      type: REGISTER_LOADING,
    });
    instance
      .post('auth/register', {
        first_name,
        last_name,
        username,
        email,
        password,
      })
      .then(res => {
        return dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        return dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {err: 'Something went wrong !'},
        });
      });
  };
