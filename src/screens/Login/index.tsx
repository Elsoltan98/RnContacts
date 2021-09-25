import {useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';

import LoginComponent from '../../components/LoginComponent';
import {ChaneArg} from '../../components/SignupComponent';
import login from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/Provider';
import {Form} from '../Register';

const Login = () => {
  const {params}: any = useRoute();
  const [form, setForm] = useState<Form>({});
  const [errors, setErrors] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {
    authDispatch,
    auth: {error, loading},
  }: any = useContext(GlobalContext);

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, userName: params.data.username});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

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
    setJustSignedUp(false);
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
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
