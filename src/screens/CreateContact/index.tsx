import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {FormInputs} from '../Register';

const CreateContact = () => {
  const {navigate}: any = useNavigation();
  const [form, setForm] = useState<FormInputs>({});
  const onChangeText = ({name, value}: any) => {
    setForm({...form, [name]: value});
  };

  const {
    contactsDispatch,
    contacts: {
      createContacts: {data, error, loading},
    },
  }: any = useContext(GlobalContext);

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  const toggleSwitch = () => {
    setForm({...form, isFavorite: !form.isFavorite});
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
      toggleSwitch={toggleSwitch}
    />
  );
};

export default CreateContact;
