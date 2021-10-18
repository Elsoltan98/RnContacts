import {
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';
import instance from '../../../helpers/axiosInterceptors';

export default (id: any) =>
  (dispatch: (arg0: {type: string; payload?: any}) => void) =>
  (onSuccess: () => void) => {
    dispatch({
      type: DELETE_CONTACTS_LOADING,
    });

    instance
      .delete(`/contacts/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_CONTACTS_SUCCESS,
          payload: id,
        });
        onSuccess();
        console.log('id', id);
      })
      .catch(err => {
        dispatch({
          type: DELETE_CONTACTS_FAIL,
          payload: err.response
            ? err.response.data
            : {err: 'Something went wrong !'},
        });
      });
  };
