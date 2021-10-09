import React, {useContext, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const onChangeText = ({name, value}: any) => {
    setForm({...form, [name]: value});
  };

  const {
    contactsDispatch,
    contacts: {
      createContacts: {data, error, loading},
    },
  } = useContext(GlobalContext);

  console.log('error', error);

  const onSubmit = () => {
    createContact(form)(contactsDispatch);
  };

  return (
    <CreateContactComponent
      form={form}
      setForm={setForm}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      data={data}
    />
  );
};

export default CreateContact;
