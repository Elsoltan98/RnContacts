import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const sortByChecked = (key: string, value: string) => {
    AsyncStorage.setItem(key, value);
  };

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
      subTitle: sortBy,
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
    {
      name: 'First name',
      selected: sortBy === 'First Name',
      onPress: () => {
        sortByChecked('sort by', 'First Name');
        setSortBy('First Name');
        setVisible(false);
      },
    },
    {
      name: 'Last name',
      selected: sortBy === 'Last Name',
      onPress: () => {
        sortByChecked('sort by', 'Last Name');
        setSortBy('Last Name');
        setVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const user: any = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);
    const sortPref = await AsyncStorage.getItem('sort by');
    if (sortPref) {
      setSortBy(sortPref);
    }
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
