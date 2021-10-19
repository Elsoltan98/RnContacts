import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerToggleButton} from '@react-navigation/drawer';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import colors from '../../colors';
import ContactsComponent from '../../components/ContactsComponent';
import {CONTACT_DETAILS} from '../../constants/routeNames';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';

const Contacts = () => {
  const {navigate, setOptions} = useNavigation();
  const [modalVisible, setModalVisibile] = useState(false);
  const [sortBy, setSortBy] = useState();
  const contactsRef = useRef([]);

  const {
    contacts: {
      getContacts: {data, loading},
    },
    contactsDispatch,
  }: any = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, [contactsDispatch]);

  const sortByChecked = async () => {
    const sortPref = await AsyncStorage.getItem('sort by');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      sortByChecked();
      return () => {};
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;
    contactsRef.current = data;

    const newList = contactsRef.current;

    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        item => !prev.map(i => i.id).includes(item.id),
      );
      navigate(CONTACT_DETAILS, {item: newContact});
    }
  }, [data.length]);

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
      sortBy={sortBy}
    />
  );
};

export default Contacts;
