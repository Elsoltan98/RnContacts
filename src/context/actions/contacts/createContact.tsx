import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from '../../../constants/actionsType';
import instance from '../../../helpers/axiosInterceptors';
import {FormInputs} from '../../../screens/Register';

export default (form: FormInputs) =>
  (dispatch: (arg0: {type: string; payload?: any}) => void) =>
  (onSuccess: () => void) => {
    const requestPayload = {
      country_code: form.countryCode || '',
      first_name: form.firstName || '',
      last_name: form.lastName || '',
      phone_number: form.phoneNumber || '',
      contact_picture: form.contactPicture || null,
      is_favorite: form.isFavorite,
    };

    dispatch({
      type: CREATE_CONTACTS_LOADING,
    });

    instance
      .post('/contacts/', requestPayload)
      .then(res => {
        dispatch({
          type: CREATE_CONTACTS_SUCCESS,
          payload: res.data,
        });
        onSuccess();
      })
      .catch(err => {
        dispatch({
          type: CREATE_CONTACTS_FAIL,
          payload: err.response
            ? err.response.data
            : {err: 'Something went wrong !'},
        });
      });
  };
