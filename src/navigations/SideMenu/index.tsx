import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';
import styles from './styles';

const SideMenu = ({navigation}: any) => {
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {icon: <Text>T</Text>, name: 'Log out'},
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('./../../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={{paddingLeft: 70}}>
          {menuItems.map(({icon, name, onPress}) => (
            <TouchableOpacity onPress={onPress} style={styles.item} key={name}>
              {icon}
              <Text style={styles.itemName}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
