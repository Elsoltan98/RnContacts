import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {
  const [email, setEmail] = useState();
  const [visible, setVisible] = useState(false);

  const settingsOptions = [
    {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
    {title: 'Accounts', subTitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subTitle: email,
      onPress: () => {},
    },
    {title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {}},
    {
      title: 'Sort by',
      subTitle: 'name',
      onPress: () => {
        setVisible(true);
      },
    },
    {title: 'Name format', subTitle: 'First name first', onPress: () => {}},
    {title: 'Import', subTitle: null, onPress: () => {}},
    {title: 'Export', subTitle: null, onPress: () => {}},
    {title: 'Blocked numbers', subTitle: null, onPress: () => {}},
    {title: 'About RNContacts', subTitle: null, onPress: () => {}},
  ];

  const sortOptions = [
    {name: 'First name', selected: false},
    {name: 'Last name', selected: false},
  ];

  const getSettings = async () => {
    const user: any = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      visible={visible}
      setVisible={setVisible}
      options={settingsOptions}
      sortOptions={sortOptions}
    />
  );
};

export default Settings;
