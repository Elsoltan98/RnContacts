import React, {useContext, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import SignupComponent, {ChaneArg} from '../../components/SignupComponent';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {LOG_IN} from '../../constants/routeNames';

export interface Form {
  userName?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  password?: string;
}

const Register = () => {
  const {navigate}: any = useNavigation();
  const [form, setForm] = useState<Form>({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    auth: {error, loading, data},
  }: any = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [authDispatch, data, error]),
  );

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

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add user name'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOG_IN, {data: response});
      });
    }
  };

  return (
    <SignupComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
