import {DrawerToggleButton} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Contacts = () => {
  const {setOptions} = useNavigation();

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
    <View>
      <Text>Conacts screen</Text>
    </View>
  );
};

export default Contacts;
