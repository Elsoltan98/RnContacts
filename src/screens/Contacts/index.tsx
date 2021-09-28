import {DrawerToggleButton} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = () => {
  const {setOptions} = useNavigation();
  const [modalVisible, setModalVisibile] = useState(false);

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
