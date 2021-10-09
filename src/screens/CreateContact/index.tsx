import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';

const CreateContact = () => {
  const {navigate} = useNavigation();
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
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
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
