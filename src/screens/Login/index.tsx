import React, {useContext, useState} from 'react';

import LoginComponent from '../../components/LoginComponent';
import {ChaneArg} from '../../components/SignupComponent';
import login from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/Provider';
import {Form} from '../Register';

const Login = () => {
  const [form, setForm] = useState<Form>({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    auth: {error, loading},
  }: any = useContext(GlobalContext);

  const onChange = ({name, value}: ChaneArg) => {
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 8) {
          setErrors(prev => {
            return {...prev, [name]: 'This field is needs min 8 characters!'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
    setForm({...form, [name]: value});
  };

  const onSubmit = async () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add user name'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add password'};
      });
    }

    if (form.userName && form.password) {
      await login(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
