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
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      login(form)(authDispatch);
    }
    console.log(form);
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
