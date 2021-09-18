import React, {useState} from 'react';
import SignupComponent, {ChaneArg} from '../../components/SignupComponent';

interface Form {
  userName?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  password?: string;
}

const Register = () => {
  const [form, setForm] = useState<Form>({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}: ChaneArg) => {
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field is needs min 6 characters!'};
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
    console.log('Form => ', form);

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
  };

  return (
    <SignupComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
