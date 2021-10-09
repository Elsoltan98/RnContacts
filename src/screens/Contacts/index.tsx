import {DrawerToggleButton} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import colors from '../../colors';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';

const Contacts = () => {
  const {setOptions} = useNavigation();
  const [modalVisible, setModalVisibile] = useState(false);

  const {
    contacts: {
      getContacts: {data, loading},
    },
    contactsDispatch,
  }: any = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, [contactsDispatch]);

  console.log(loading);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <View style={{marginLeft: -10}}>
          <DrawerToggleButton tintColor={colors.grey} />
        </View>
      ),
    });
  }, [setOptions]);

  return (
    <ContactsComponent
      data={data}
      loading={loading}
      visible={modalVisible}
      setVisible={setModalVisibile}
    />
  );
};

export default Contacts;
