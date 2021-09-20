import instance from '../../../helpers/axiosInterceptors';
import {Form} from '../../../screens/Register';

export default ({
  userName,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
}: Form) => {
  instance
    .post('auth/register', {
      first_name,
      last_name,
      userName,
      email,
      password,
    })
    .then(res => {})
    .catch(err => {});
};
