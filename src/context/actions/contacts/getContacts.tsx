import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';
import axios from '../../../helpers/axiosInterceptors';

export default () =>
  (dispatch: (arg0: {type: string; payload?: any}) => void) => {
    dispatch({
      type: GET_CONTACTS_LOADING,
    });

    axios
      .get('/contacts/')
      .then(res => {
        dispatch({
          type: GET_CONTACTS_SUCCESS,
          payload: res.data,
        });
        console.log(res.data);
      })
      .catch(err => {
        dispatch({
          type: GET_CONTACTS_FAIL,
          payload: err.response
            ? err.response.data
            : {err: 'Something went wrong !'},
        });
      });
  };
