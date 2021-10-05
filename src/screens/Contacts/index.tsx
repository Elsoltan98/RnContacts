import {DrawerToggleButton} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
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
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
    // console.log(getContacts()(contactsDispatch));
  }, [contactsDispatch]);

  // console.log(data, loading);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <View style={{marginLeft: -15}}>
          <DrawerToggleButton />
        </View>
      ),
    });
  }, [setOptions]);

  return (
    <ContactsComponent visible={modalVisible} setVisible={setModalVisibile} />
  );
};

export default Contacts;
