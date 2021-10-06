import React, {useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const onChangeText = ({name, value}: any) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log(1111, '1111');
    console.log('Form', form);
  };

  return (
    <CreateContactComponent
      form={form}
      setForm={setForm}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
    />
  );
};

export default CreateContact;
