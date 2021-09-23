import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';
import logout from '../../context/actions/auth/logout';
import styles from './styles';

const SideMenu = ({navigation, authDispatch}: any) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout !', 'Are you sure you want logout ?', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => logout()(authDispatch),
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {icon: <Text>T</Text>, name: 'Log out', onPress: handleLogout},
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('./../../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.menuItem}>
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
