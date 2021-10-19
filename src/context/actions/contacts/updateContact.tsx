import {
  UPDATE_CONTACTS_FAIL,
  UPDATE_CONTACTS_LOADING,
  UPDATE_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';
import instance from '../../../helpers/axiosInterceptors';
import {FormInputs} from '../../../screens/Register';

export default (form: FormInputs, id: any) =>
  (dispatch: (arg0: {type: string; payload?: any}) => void) =>
  (onSuccess: (arg0: any) => void) => {
    const requestPayload = {
      country_code: form.countryCode || '',
      first_name: form.firstName || '',
      last_name: form.lastName || '',
      phone_number: form.phoneNumber || '',
      contact_picture: form.contactPicture || null,
      is_favorite: form.isFavorite || false,
    };

    dispatch({
      type: UPDATE_CONTACTS_LOADING,
    });

    instance
      .put(`/contacts/${id}`, requestPayload)
      .then(res => {
        dispatch({
          type: UPDATE_CONTACTS_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: UPDATE_CONTACTS_FAIL,
          payload: err.response
            ? err.response.data
            : {err: 'Something went wrong !'},
        });
      });
  };
